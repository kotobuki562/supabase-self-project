import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { supabase } from "../../util/supabase";
import { useRouter } from "next/router";
import type { GetStaticPaths } from "next";

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
    <Layout>
      <div>
        {post.map((data) => {
          return (
            <div key={data.id}>
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Posts;
