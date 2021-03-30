import { NextPage } from "next";
import { Layout } from "../components/layout";
import { supabase } from "../util/supabase";
import { useState, useEffect } from "react";
import { InputForm } from "../components/parts/Form/Input";
import { formatISO } from "date-fns";
import { Button } from "../components/parts/Button/Button";
import {useRouter} from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
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
          uid: user.id,
          createAt: date,
          updateAt: date,
        },
      ]);
      return router.reload()
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
  ];

  useEffect(() => {
    getAllData()
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full px-4">
        <InputForm inputs={inputList} />
        <div>
          <Button
            disabled={!text || !title}
            btnText="送信"
            type="other"
            onClick={() => {
              addTodo();
              setTitle("");
              setText("");
            }}
          />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          {todos.map((todo) => {
            return (
              <div
                className="m-4 dark:bg-gray-700 bg-gray-200 border-2 border-gray-100 dark:border-gray-600 hover:border-darkSushi dark:hover:border-sushi rounded cursor-pointer"
                key={todo.id}
              >
                <h3 className="py-1 px-2 border-b font-semibold border-gray-100 dark:border-gray-500">
                  {todo.title}
                </h3>
                <p className="py-1 px-2 font-light text-gray-500 dark:text-gray-400">{todo.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
