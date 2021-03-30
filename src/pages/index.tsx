import { NextPage } from "next";
import { Layout } from "../components/layout";
import { supabase } from "../util/supabase";
import { useState, useEffect } from "react";
import { InputForm } from "../components/parts/Form/Input";
import { formatISO } from "date-fns";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const date = formatISO(new Date());
  const user = supabase.auth?.user();

  const getAllData = async () => {
    try {
      const { data: lists, error } = await supabase.from("lists").select("*");
      await setTodos(lists);
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
    getAllData();
  }, []);

  return (
    <Layout>
      <InputForm inputs={inputList} />

      {/* <InputForm inputs={inputList} /> */}
      <button
        onClick={() => {
          addTodo();
          setTitle("");
          setText("");
        }}
      >
        送信
      </button>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </Layout>
  );
};

export default Home;
