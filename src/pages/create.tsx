import { NextPage } from "next";
import { Layout } from "../components/layout";
import { supabase } from "../util/supabase";
import { useState } from "react";
import { InputForm } from "../components/parts/Input/Input";
import { formatISO } from "date-fns";
import { Button } from "../components/parts/Button/Button";
import { useRouter } from "next/router";
import cc from "classcat";

const Create: NextPage = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [switchName, setSwitchName] = useState(true);
  const [switchContent, setSwitchCintent] = useState(false);
  const [switchEmoji, setSwitchEmoji] = useState(false);

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

  const inputNameList = [
    {
      type: "name",
      name: "name",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "お名前は？🤔",
    },
  ];

  const contentList = [
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

  const emojiList = [
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
        <div className="border-sushi flex justify-between my-4">
          <span
            className={cc(
              name ? "p-1 w-full bg-sushi" : "p-1 w-full bg-fontDark"
            )}
          ></span>
          <span
            className={cc(
              title && text ? "p-1 w-full bg-sushi" : "p-1 w-full bg-fontDark"
            )}
          ></span>
          <span
            className={cc(
              emoji && category
                ? "p-1 w-full bg-sushi"
                : "p-1 w-full bg-fontDark"
            )}
          ></span>
        </div>
        {switchName ? (
          <div>
            <InputForm inputs={inputNameList} />
            <div>
              <Button
                disabled={!name}
                btnText="next"
                type="other"
                size="sm"
                onClick={() => {
                  setSwitchName(false);
                  setSwitchCintent(true);
                }}
              />
            </div>
          </div>
        ) : null}
        {switchContent ? (
          <div>
            <InputForm inputs={contentList} />
            <div className="flex">
              <div className="mr-4">
                <Button
                  btnText="back"
                  type="delete"
                  size="sm"
                  onClick={() => {
                    setSwitchName(true);
                    setSwitchCintent(false);
                  }}
                />
              </div>
              <div>
                <Button
                  disabled={!text || !title}
                  btnText="next"
                  type="other"
                  size="sm"
                  onClick={() => {
                    setSwitchCintent(false);
                    setSwitchEmoji(true);
                  }}
                />
              </div>
            </div>
          </div>
        ) : null}
        {switchEmoji ? (
          <div>
            <InputForm inputs={emojiList} />
            <div className="flex">
              <div className="mr-4">
                <Button
                  btnText="back"
                  type="delete"
                  size="sm"
                  onClick={() => {
                    setSwitchCintent(true);
                    setSwitchEmoji(false);
                  }}
                />
              </div>
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
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Create;
