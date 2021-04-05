import React, { VFC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ShareSNS } from "../../atoms/Share/shareSns";
import { supabase } from "../../../util/supabase";
import { InputForm } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import { formatISO } from "date-fns";
type DiaryInfo = {
  id: string;
  name: string;
  emoji: string;
  title: string;
  text: string;
  createAt: string;
  category?: "happy" | "anger" | "sad" | "relax" | "nothing";
};

const Diary: VFC<DiaryInfo> = (props) => {
  const today = formatISO(new Date());
  const router = useRouter();
  const [item, setItem] = useState("");
  const [emoji, setEmoji] = useState([]);
  const readData = async () => {
    const { data: emojis, error } = await supabase
      .from("emojis")
      .select("*")
      .eq("list_id", props.id);
    setEmoji(emojis);
    // const { data, error } = await supabase.from("emojis").select(`id,emojis`);
    // const { data: emojis } = await supabase.from("emojis").select("emojis");
  };
  const updateEmojis = async () => {
    await supabase
      .from("emojis")
      .insert([{ list_id: props.id, emoji: item, createAt: today }]);
  };

  const emojiList = [
    {
      type: "text",
      name: "emoji",
      value: item,
      onChange: (e) => setItem(e.target.value),
      placeholder: "日記にemojiを贈ろう！",
      select: true,
      selectValue: [
        "😄",
        "😃",
        "😀",
        "😊",
        "😉",
        "😍",
        "😘",
        "😚",
        "😗",
        "😙",
        "😜",
        "😝",
        "😛",
        "😳",
        "😁",
        "😔",
        "😌",
        "😒",
        "😞",
        "😣",
        "😢",
        "😂",
        "😭",
        "😪",
        "😥",
        "😰",
        "😅",
        "😓",
        "😩",
        "😫",
        "😨",
        "😱",
        "😠",
        "😡",
        "😤",
        "😖",
        "😆",
        "😋",
        "😷",
        "😎",
        "😴",
        "😵",
        "😲",
        "😟",
        "😦",
        "😧",
        "😈",
        "👿",
        "😮",
        "😬",
        "😐",
        "😕",
        "😯",
        "😶",
        "😇",
        "😏",
        "😑",
        "🤔",
        "🥳",
      ],
    },
  ];

  useEffect(() => {
    readData();
  }, []);
  return (
    <div>
      {props.category === "happy" ? (
        <img
          className="titleImage max-w-xs sm:max-w-sm"
          src="https://user-images.githubusercontent.com/67810971/113497060-f5d5bf80-953a-11eb-9c63-a5287c7bafd4.png"
          alt="happy-day"
        />
      ) : null}
      {props.category === "anger" ? (
        <img
          className="titleImage max-w-xs sm:max-w-sm"
          src="https://user-images.githubusercontent.com/67810971/113497063-f8381980-953a-11eb-9aac-80949e013d7f.png"
          alt="anger-day"
        />
      ) : null}
      {props.category === "sad" ? (
        <img
          className="titleImage max-w-xs sm:max-w-sm"
          src="https://user-images.githubusercontent.com/67810971/113497062-f79f8300-953a-11eb-98fa-8abef78ae96e.png"
          alt="sad-day"
        />
      ) : null}
      {props.category === "relax" ? (
        <img
          className="titleImage max-w-xs sm:max-w-sm"
          src="https://user-images.githubusercontent.com/67810971/113497064-f8d0b000-953a-11eb-878e-f8128bbbc906.png"
          alt="relax-day"
        />
      ) : null}
      {props.category === "nothing" ? (
        <img
          className="titleImage max-w-xs sm:max-w-sm"
          src="https://user-images.githubusercontent.com/67810971/113497065-fa01dd00-953a-11eb-8ca1-3129f0985f85.png"
          alt="nothing-day"
        />
      ) : null}

      <div className="flex flex-col items-center">
        <h2 className="text-7xl sm:text-9xl mb-8">{props.emoji}</h2>
      </div>
      <section>
        <div className="mb-16 w-full tracking-wider">
          <h1 className="text-dark dark:text-white text-center text-3xl font-semibold mb-8">
            {props.title}
          </h1>
          <p className="text-dark dark:text-white">{props.text}</p>
        </div>

        <div className="text-sm sm:text-base text-fontDark">
          <p>
            {props.name}さんが{props.createAt}に作成
          </p>
        </div>
      </section>
      <div className="mt-10">
        <InputForm inputs={emojiList} />
        <Button
          type={!item ? null : "other"}
          disabled={!item}
          size="sm"
          onClick={() => {
            updateEmojis();
            router.reload();
          }}
          btnText="emojiを贈る"
        />
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7">
          {emoji.map((stamp) => {
            return (
              <p className="text-center text-3xl p-5 m-5" key={stamp.id}>
                {stamp.emoji}
              </p>
            );
          })}
        </div>
      </div>

      <ShareSNS id={props.id} title={props.title} />
    </div>
  );
};

export default Diary;
