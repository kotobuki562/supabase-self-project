import { NextPage } from "next";
import { Layout } from "../components/layout";
import { supabase } from "../util/supabase";
import { useState, useEffect } from "react";
import { InputForm } from "../components/parts/Form/Input";
import { formatISO } from "date-fns";
import { Button } from "../components/parts/Button/Button";
import { useRouter } from "next/router";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [todos, setTodos] = useState<any[]>([]);
  const date = formatISO(new Date());
  const user = supabase.auth?.user();

  const getAllData = async () => {
    try {
      const { data: lists, error } = await supabase.from("lists").select("*");
      return await setTodos(lists);
    } catch (error) {
      return console.log(error);
    }
  };

  const addTodo = async () => {
    try {
      await supabase.from("lists").insert([
        {
          title: title,
          text: text,
          emoji: emoji,
          createAt: date,
          updateAt: date,
        },
      ]);
      return router.reload();
    } catch (error) {
      return console.log(error);
    }
  };

  const inputList = [
    {
      type: "title",
      name: "title",
      value: title,
      onChange: (e) => setTitle(e.target.value),
    },
    {
      type: "text",
      name: "text",
      value: text,
      onChange: (e) => setText(e.target.value),
    },
    {
      type: "text",
      name: "emoji",
      value: emoji,
      onChange: (e) => setEmoji(e.target.value),
      leftIcon: "😊",
      placeholder: "emojiを一つだけ入力してください🙏",
    },
  ];

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full px-4">
        <InputForm inputs={inputList} />
        <div>
          <Button
            disabled={!text || !title || emoji.length > 2}
            btnText="送信"
            type="other"
            size="sm"
            onClick={() => {
              addTodo();
              setTitle("");
              setText("");
              setEmoji("");
            }}
          />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5">
          {todos.map((todo) => {
            return (
              <Link key={todo.id} href="#">
                <a className="m-5 p-5 text-center text-4xl sm:text-4xl hover:bg-gray-100 dark:hover:bg-semiDark border-fontDark rounded-lg">
                  {todo.emoji}
                </a>
              </Link>
              // <div
              //   className="m-4 px-2 dark:bg-semiDark bg-white border sm:border-2 border-fontDark hover:border-darkSushi dark:hover:border-sushi rounded cursor-pointer"
              //   key={todo.id}
              // >
              //   <h3 className="py-1 px-2 border-b font-semibold border-fontDark">
              //     {todo.title}
              //   </h3>
              //   <p className="py-1 px-2 font-light text-gray-500 dark:text-fontDark">
              //     {todo.text}
              //   </p>
              //   <p className="py-1 px-2 font-light text-gray-500 dark:text-fontDark">
              //     {todo.emoji}
              //   </p>
              // </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
