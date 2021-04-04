import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { supabase } from "../../util/supabase";
import { useRouter } from "next/router";
import type { GetStaticPaths } from "next";
import { format } from "date-fns";
import Diary from "../../components/templates/Diary/Diary";

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
  const post = await getPost.data;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

const Posts = ({ post }) => {
  return (
    <>
      {post.map((data) => {
        const postDate = format(new Date(data.createAt), "yyyy年MM月dd日");
        if (data?.category === "😊") {
          return (
            <Layout
              key={data.id}
              meta={{
                pageName: `emoji日記 | ${data.title}`,
                description: `${data.name}さんのハッピーな日記 | ${data.text}`,
                cardImage:
                  "https://user-images.githubusercontent.com/67810971/113494641-198e0b00-9525-11eb-9359-0e3074d7a660.png",
              }}
            >
              <div className="flex flex-col px-4 sm:px-8 w-full" key={data.id}>
                <img
                  className="titleImage"
                  src="https://user-images.githubusercontent.com/67810971/113497060-f5d5bf80-953a-11eb-9c63-a5287c7bafd4.png"
                  alt="happy-day"
                />
                <Diary
                  id={data.id}
                  name={data.name}
                  emoji={data.emoji}
                  title={data.title}
                  text={data.text}
                  createAt={postDate}
                  category={data.category}
                />
              </div>
            </Layout>
          );
        } else if (data?.category === "😡") {
          return (
            <Layout
              key={data.id}
              meta={{
                pageName: `emoji日記 | ${data.title}`,
                description: `${data.name}さんの怒りに燃える日記 | ${data.text}`,
                cardImage:
                  "https://user-images.githubusercontent.com/67810971/113494637-14c95700-9525-11eb-8781-612b022fd86c.png",
              }}
            >
              <div className="flex flex-col px-4 sm:px-8 w-full" key={data.id}>
                <img
                  className="titleImage"
                  src="https://user-images.githubusercontent.com/67810971/113497063-f8381980-953a-11eb-9aac-80949e013d7f.png"
                  alt="anger-day"
                />
                <Diary
                  id={data.id}
                  name={data.name}
                  emoji={data.emoji}
                  title={data.title}
                  text={data.text}
                  createAt={postDate}
                  category={data.category}
                />
              </div>
            </Layout>
          );
        } else if (data.category === "😭") {
          return (
            <Layout
              key={data.id}
              meta={{
                pageName: `emoji日記 | ${data.title}`,
                description: `${data.name}さんの悲しみに暮れた日記 | ${data.text}`,
                cardImage:
                  "https://user-images.githubusercontent.com/67810971/113494636-12ff9380-9525-11eb-8f24-bffdc014fdd9.png",
              }}
            >
              <div className="flex flex-col px-4 sm:px-8 w-full" key={data.id}>
                <img
                  className="titleImage"
                  src="https://user-images.githubusercontent.com/67810971/113497062-f79f8300-953a-11eb-98fa-8abef78ae96e.png"
                  alt="sad-day"
                />
                <Diary
                  id={data.id}
                  name={data.name}
                  emoji={data.emoji}
                  title={data.title}
                  text={data.text}
                  createAt={postDate}
                  category={data.category}
                />
              </div>
            </Layout>
          );
        } else if (data.category === "😌") {
          return (
            <Layout
              key={data.id}
              meta={{
                pageName: `emoji日記 | ${data.title}`,
                description: `${data.name}さんのリラックスした日記 | ${data.text}`,
                cardImage:
                  "https://user-images.githubusercontent.com/67810971/113494638-1561ed80-9525-11eb-9f89-39c6abcbecb0.png",
              }}
            >
              <div className="flex flex-col px-4 sm:px-8 w-full" key={data.id}>
                <img
                  className="titleImage"
                  src="https://user-images.githubusercontent.com/67810971/113497064-f8d0b000-953a-11eb-878e-f8128bbbc906.png"
                  alt="relax-day"
                />
                <Diary
                  id={data.id}
                  name={data.name}
                  emoji={data.emoji}
                  title={data.title}
                  text={data.text}
                  createAt={postDate}
                  category={data.category}
                />
              </div>
            </Layout>
          );
        } else if (data.category === "😐") {
          return (
            <Layout
              key={data.id}
              meta={{
                pageName: `emoji日記 | ${data.title}`,
                description: `${data.name}さんの何も無かった日記 | ${data.text}`,
                cardImage:
                  "https://user-images.githubusercontent.com/67810971/113494640-15fa8400-9525-11eb-919e-e02ec4b99e1d.png",
              }}
            >
              <div className="flex flex-col px-4 sm:px-8 w-full" key={data.id}>
                <div>
                  <img
                    className="titleImage"
                    src="https://user-images.githubusercontent.com/67810971/113497065-fa01dd00-953a-11eb-8ca1-3129f0985f85.png"
                    alt="nothing-day"
                  />
                </div>

                <Diary
                  id={data.id}
                  name={data.name}
                  emoji={data.emoji}
                  title={data.title}
                  text={data.text}
                  createAt={postDate}
                  category={data.category}
                />
              </div>
            </Layout>
          );
        }
      })}
    </>
  );
};

export default Posts;
