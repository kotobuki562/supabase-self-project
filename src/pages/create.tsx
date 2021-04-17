import { NextPage } from "next";
import { Layout } from "../components/layout";
import { setListToSupabase } from "../repositories/lists/list";
import { useState } from "react";
import { InputForm } from "../components/atoms/Input/Input";
import { formatISO } from "date-fns";
import { Button } from "../components/atoms/Button/Button";
import { useRouter } from "next/router";
import cc from "classcat";
import { ModalItem } from "../components/atoms/Modal/modal";
import Loading from "../components/atoms/Loading/Loading";
import List from "../models/lists/list";
import { EmojiPicker } from "../components/atoms/Emoji/EmojiPicker";

const Create: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState({
    id: "",
    native: "",
    colons: "",
    emotions: [""],
    name: "",
    skin: null,
  });
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [switchName, setSwitchName] = useState(true);
  const [switchContent, setSwitchCintent] = useState(false);
  const [switchEmoji, setSwitchEmoji] = useState(false);
  const date = formatISO(new Date());

  const list = new List(name, title, text, category, emoji, date, date);

  const addTodo = async () => {
    try {
      setLoading(true);
      await setListToSupabase(list, "投稿成功！");
      setLoading(false);
      return router.push("/");
    } catch (error) {
      await setLoading(false);
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
      placeholder: "日記のタイトルは？🤔",
    },
    {
      type: "text",
      name: "text",
      value: text,
      onChange: (e) => setText(e.target.value),
      placeholder: "詳細は？🤔",
    },
  ];

  const emojiLists = [
    {
      type: "text",
      name: "category",
      value: category,
      onChange: (e) => setCategory(e.target.value),
      placeholder: "その時の心境は？🤔",
      select: true,
      selectValue: ["😊", "😡", "😭", "😌", "😐"],
    },
  ];

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  } else {
    return (
      <Layout
        meta={{
          pageName: "emoji日記 | 今日あったことを30秒で振り返りませんか？",
          cardImage:
            "https://user-images.githubusercontent.com/67810971/113526962-e320c080-95f6-11eb-8f5d-22d1aa1ba5da.png",
          description:
            "今日の出来事を30秒で振り返って、絵文字を載せて振り返りましょう。今の心境を語るでもよし！",
        }}
      >
        <div className="flex flex-col w-full px-4">
          <div className="border-sushi flex justify-between my-4">
            <div className="p-1 w-full flex flex-col items-center">
              <span
                className={cc([
                  "p-1 w-full rounded-lg mx-1",
                  name ? "bg-darkSushi dark:bg-sushi" : "bg-fontDark",
                ])}
              ></span>
              <p
                className={cc([
                  name ? "text-darkSushi dark:text-sushi" : "text-fontDark",
                ])}
              >
                Step 1 😊
              </p>
            </div>
            <div className="p-1 w-full flex flex-col items-center">
              <span
                className={cc([
                  "p-1 w-full rounded-lg mx-1",
                  text && title ? "bg-darkSushi dark:bg-sushi" : "bg-fontDark",
                ])}
              ></span>
              <p
                className={cc([
                  text && title
                    ? "text-darkSushi dark:text-sushi"
                    : "text-fontDark",
                ])}
              >
                Step 2 😎
              </p>
            </div>
            <div className="p-1 w-full flex flex-col items-center">
              <span
                className={cc([
                  "p-1 w-full rounded-lg mx-1",
                  emoji && category
                    ? "bg-darkSushi dark:bg-sushi"
                    : "bg-fontDark",
                ])}
              ></span>
              <p
                className={cc([
                  emoji && category
                    ? "text-darkSushi dark:text-sushi"
                    : "text-fontDark",
                ])}
              >
                Finish! 🥳
              </p>
            </div>
          </div>
          {switchName ? (
            <div>
              <InputForm inputs={inputNameList} />
              <div>
                <Button
                  disabled={!name}
                  btnText="Next 👉"
                  type={!name ? null : "other"}
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
                    btnText="👈 Back"
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
                    btnText="Next 👉"
                    type={!text || !title ? null : "other"}
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
              <EmojiPicker selectEmoji={setEmoji} emojiValue={{ ...emoji }} />
              <div className="mt-4">
                <InputForm inputs={emojiLists} />
              </div>
              <div className="flex">
                <div className="mr-4">
                  <Button
                    btnText="👈 Back"
                    type="delete"
                    size="sm"
                    onClick={() => {
                      setSwitchCintent(true);
                      setSwitchEmoji(false);
                    }}
                  />
                </div>
                <div className="mb-8">
                  <ModalItem
                    title="日記を作成します。"
                    text={
                      <div className="my-4">
                        <div className="flex flex-col mb-8 w-full">
                          <div className="flex w-full mb-4">
                            <div className="w-2/5">
                              <p>あなたのお名前</p>
                            </div>
                            <div className="w-3/5">
                              <p className="dark:text-white">{name}</p>
                            </div>
                          </div>
                          <div className="flex w-full mb-4">
                            <div className="w-2/5">
                              <p>日記タイトル</p>
                            </div>
                            <div className="w-3/5">
                              <p className="dark:text-white">{title}</p>
                            </div>
                          </div>
                          <div className="flex w-full mb-4">
                            <div className="w-2/5">
                              <p>日記詳細</p>
                            </div>
                            <div className="w-3/5">
                              <p className="dark:text-white">{text}</p>
                            </div>
                          </div>
                          <div className="flex w-full mb-4">
                            <div className="w-2/5">
                              <p>emoji</p>
                            </div>
                            <div className="w-3/5">
                              <p className="dark:text-white">{emoji.native}</p>
                            </div>
                          </div>
                          <div className="flex w-full mb-4">
                            <div className="w-2/5">
                              <p>その時の気持ち</p>
                            </div>
                            <div className="w-3/5">
                              <p className="dark:text-white">{category}</p>
                            </div>
                          </div>
                        </div>
                        <p>
                          ※日記が一覧画面に表示されるのに10秒程度かかります。都度リロードしてみてください
                        </p>
                      </div>
                    }
                    btnType={
                      !name || !text || !title || !emoji || !category
                        ? null
                        : "other"
                    }
                    disabled={!name || !text || !title || !emoji || !category}
                    onClick={() => {
                      addTodo();
                      setTitle("");
                      setText("");
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
  }
};

export default Create;
