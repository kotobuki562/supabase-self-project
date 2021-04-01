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
  const date = formatISO(new Date());
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
      return router.push("/");
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

  return (
    <Layout>
      <div className="flex flex-col w-full px-4">
        <InputForm inputs={inputList} />
        <div>
          <Button
            disabled={
              !text ||
              !title ||
              !emoji ||
              emoji.length > 2 ||
              emoji.length === 1
            }
            btnText="create"
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
      </div>
    </Layout>
  );
};

export default Create;
