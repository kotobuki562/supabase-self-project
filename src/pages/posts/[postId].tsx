import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { supabase } from "../../util/supabase";
import { useRouter } from "next/router";
import type { GetStaticPaths } from "next";
import { format } from "date-fns";
import Diary from "../../components/templates/Diary/Diary";
// import { Button } from "../../components/atoms/Button/Button";
import Loading from "../../components/atoms/Loading/Loading";
import CustomEmoji from "../../models/customEmoji/customEmoji";
import { getAllCustomEmojiData } from "../../repositories/customEmojis/customEmojis";

export const getStaticPaths: GetStaticPaths<{
  postId: string | null;
}> = async () => {
  const lists = await supabase.from("lists").select("*");
  const posts = await lists.data;
  const paths = posts.map((post) => {
    return { params: { postId: `${post.id}` } };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }) => {
  const postId = params.postId as string;
  const getPost = await supabase.from("lists").select("*").eq("id", postId);
  const post = await getPost.data[0];
  const customEmoji: any[] = [];
  await getAllCustomEmojiData(customEmoji);
  return {
    props: {
      post,
      customEmoji,
    },
    revalidate: 1,
  };
};

const Posts = ({ post, customEmoji }) => {
  const postDate = format(new Date(post.createAt), "yyyy年MM月dd日");
  return (
    <Layout
      key={post.id}
      meta={{
        pageName: `emoji日記 | ${post.title}`,
        description: `${post.name}さんの${
          post.category === "😊" ? "ハッピーな日記" : null
        }${post.category === "😡" ? "怒りに燃える日記" : null}${
          post.category === "😭" ? "悲しみに暮れた日記" : null
        }${post.category === "😌" ? "リラックスした日記" : null}${
          post.category === "😐" ? "何も無かった日記" : null
        } | ${post.text}`,
        cardImage: `${
          post.category === "😊"
            ? "https://user-images.githubusercontent.com/67810971/113656677-5699ff00-96d7-11eb-8520-101b0887ee2a.png"
            : null
        }${
          post.category === "😡"
            ? "https://user-images.githubusercontent.com/67810971/113656680-57cb2c00-96d7-11eb-88f4-69ba0519a933.png"
            : null
        }${
          post.category === "😭"
            ? "https://user-images.githubusercontent.com/67810971/113656682-5863c280-96d7-11eb-9b78-3c0b7e72b90b.png"
            : null
        }${
          post.category === "😌"
            ? "https://user-images.githubusercontent.com/67810971/113656679-57cb2c00-96d7-11eb-89b2-034189b963ec.png"
            : null
        }${
          post.category === "😐"
            ? "https://user-images.githubusercontent.com/67810971/113656688-5994ef80-96d7-11eb-92bf-dd06fd5eeddb.png"
            : null
        }`,
      }}
    >
      <div className="flex flex-col px-4 sm:px-8 w-full" key={post.id}>
        <Diary
          customEmoji={customEmoji}
          emoji={post.emojiInfo.native}
          imageUrl={post.emojiInfo.imageUrl}
          {...post}
          createAt={postDate}
          category={
            post.category === "😊"
              ? "happy"
              : null || post.category === "😡"
              ? "anger"
              : null || post.category === "😭"
              ? "sad"
              : null || post.category === "😌"
              ? "relax"
              : null || post.category === "😐"
              ? "nothing"
              : null
          }
        />
      </div>
    </Layout>
  );
};

export default Posts;
