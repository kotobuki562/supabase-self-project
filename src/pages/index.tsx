import { NextPage } from "next";
import { Layout } from "../components/layout";
import { supabase } from "../util/supabase";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "../components/parts/Loading/Loading";

export async function getStaticProps() {
  const lists = await supabase.from("lists").select("*");
  const posts = await lists.data;
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

const Home = ({ posts }) => {
  // const [posts, setPosts] = useState<any[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const getAllData = async () => {
  //   try {
  //     const { data: lists, error } = await supabase.from("lists").select("*");
  //     setIsLoading(false);
  //     return await setPosts(lists);
  //   } catch (error) {
  //     setIsLoading(false);
  //     return console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllData();
  // }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full px-4">
        {/* {isLoading ? (
          <Loading />
        ) : (
          <> */}
        <div className="flex">
          <Link href="/create">
            <a className="dark:border-sushi border-darkSushi dark:text-sushi text-darkSushi hover:bg-darkSushi dark:hover:bg-sushi border-2 px-4 py-2 text-sm sm:text-base flex items-center font-semibold tracking-wide rounded-full transition duration-200 hover:text-white dark:hover:text-black outline-none">
              Let's create!
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7">
          {posts.map((post) => {
            return (
              <Link
                key={post.id}
                href={{
                  pathname: "/posts/[postId]",
                  query: { postId: post.id },
                }}
              >
                <a className="m-5 p-5 transition duration-200 text-center text-4xl sm:text-4xl hover:bg-gray-100 dark:hover:bg-semiDark border-fontDark rounded-lg">
                  {post.emoji}
                </a>
              </Link>
            );
          })}
        </div>
        {/* </>
        )} */}
      </div>
    </Layout>
  );
};

export default Home;
