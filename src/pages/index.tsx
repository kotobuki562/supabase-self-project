import { NextPage } from "next";
import { Layout } from "../components/layout";
import { supabase } from "../util/supabase";
import { useState, useEffect } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<any[]>([]);

  const getAllData = async () => {
    try {
      const { data: lists, error } = await supabase.from("lists").select("*");
      return await setTodos(lists);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full px-4">
        <div className="flex">
          <Link href="/create">
            <a className="dark:border-sushi border-darkSushi dark:text-sushi text-darkSushi hover:bg-darkSushi dark:hover:bg-sushi border-2 px-4 py-2 text-sm sm:text-base flex items-center font-semibold tracking-wide rounded-full transition duration-200 hover:text-white dark:hover:text-black outline-none">
              Let's create!
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5">
          {todos.map((todo) => {
            return (
              <Link key={todo.id} href="#">
                <a className="m-5 p-5 transition duration-200 text-center text-4xl sm:text-4xl hover:bg-gray-100 dark:hover:bg-semiDark border-fontDark rounded-lg">
                  {todo.emoji}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
