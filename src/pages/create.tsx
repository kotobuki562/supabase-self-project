import { NextPage } from "next";
import { Layout } from "../components/layout";
import { supabase } from "../util/supabase";
import { useState } from "react";
import { InputForm } from "../components/parts/Input/Input";
import { formatISO } from "date-fns";
import { Button } from "../components/parts/Button/Button";
import { useRouter } from "next/router";

const Create: NextPage = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  const date = formatISO(new Date());
  const addTodo = async () => {
    try {
      await supabase.from("lists").insert([
        {
          name: name,
          title: title,
          text: text,
          emoji: emoji,
          category: category,
          createAt: date,
          updateAt: date,
        },
      ]);
      return router.push("/");
    } catch (error) {
      return console.log(error);
    }
  };

  const inputList = [
    {
      type: "name",
      name: "name",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "お名前は？🤔",
    },
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
      leftIcon: "🥝",
      placeholder: "emojiを一つだけ入力してください🙏",
    },
    {
      type: "text",
      name: "category",
      value: category,
      onChange: (e) => setCategory(e.target.value),
      placeholder: "今の気持ちは？🤔",
      select: true,
      selectValue: ["😊", "😡", "😭", "😌", "😐"],
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col w-full px-4">
        <InputForm inputs={inputList} />
        <div>
          <Button
            disabled={
              !name ||
              !text ||
              !title ||
              !emoji ||
              emoji.length !== 2 ||
              !category
            }
            btnText="create"
            type="other"
            size="sm"
            onClick={() => {
              addTodo();
              setTitle("");
              setText("");
              setEmoji("");
              setCategory("");
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Create;
