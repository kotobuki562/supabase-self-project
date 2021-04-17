import "emoji-mart/css/emoji-mart.css";
import { Picker, Emoji } from "emoji-mart";
import { useTheme } from "next-themes";
import React, { useState, useEffect, VFC } from "react";
import { customEmojis } from "./CustomEmoji";
import { supabase } from "../../../util/supabase";

// export async function getStaticProps() {
//   const customEmoji: any[] = [];
//   const lists = await supabase.from("customEmoji").select("*");
//   const posts = lists.data;
//   posts.map((post) => {
//     const data = {
//       id: post.id,
//       ...post,
//     };
//     return customEmoji.push(data);
//   });
//   return {
//     props: {
//       customEmoji,
//     },
//     revalidate: 10,
//   };
// }

type Props = {
  selectEmoji: any;
  emojiValue: {
    id: string;
    native: string;
    colons: string;
    emotions: string[];
    name: string;
    skin: number | null;
    imageUrl?: string;
  };
};

export const EmojiPicker: VFC<Props> = (props) => {
  // const [customInfo, setCustomInfo] = useState([]);
  const { theme } = useTheme();
  const { native, imageUrl } = props.emojiValue;

  // const getCustomEmoji = async () => {
  //   const { data: customEmoji, error } = await supabase
  //     .from("customEmoji")
  //     .select("*");
  //   console.log(customEmoji);
  //   console.log(customEmojis);

  //   return setCustomInfo(customEmoji);
  // };

  const onSelect = (emoji) => {
    // console.log({ emoji });
    props.selectEmoji({ ...emoji });
  };

  // const fetchData = async () => {
  //   const customEmoji: any[] = [];
  //   const lists = await supabase.from("customEmoji").select("*");
  //   const posts = lists.data;
  //   posts.map((post) => {
  //     const data = {
  //       id: post.id,
  //       ...post,
  //     };

  //     customEmoji.push(data);
  //     return console.log(customEmoji);
  //   });
  // };

  // useEffect(() => {
  //   fetchData();
  //   getCustomEmoji();
  // }, []);

  return (
    <div className="text-center">
      <Picker
        custom={customEmojis}
        defaultSkin={1}
        exclude={["flags", "symbols"]}
        theme={theme === "light" ? "light" : "dark"}
        showPreview={false}
        onSelect={(emoji) => onSelect({ ...emoji })}
        set="apple"
        style={{ color: "lightgray", width: "100%" }}
        title={
          <p className="text-base">
            {native || imageUrl ? (
              <span className="text-base flex flex-col items-center">
                {native ? (
                  `${native} こちらでよろしいですか?`
                ) : (
                  <div className="flex items-center">
                    <div
                      className="w-7 h-7"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "contain",
                      }}
                    />
                    <p>こちらでよろしいですか？</p>
                  </div>
                )}
              </span>
            ) : (
              "emojiを選んでください"
            )}
          </p>
        }
        i18n={{
          search: "emoji検索",
          clear: "クリア", // Accessible label on "clear" button
          notfound: "emojiが見つかりません",
          skintext: "スキンカラー",
          categories: {
            search: "検索結果",
            recent: "オススメのemoji😘",
            smileys: "顔文字 & アクション",
            people: "人 & 身体",
            nature: "動物 & 自然",
            foods: "食べ物 & 飲み物",
            activity: "ゲーム & スポーツ",
            places: "旅行 & 場所",
            objects: "オブジェクト",
            custom: "カスタム",
          },
          categorieslabel: "Emoji categories", // Accessible title for the list of categories
          // skintones: {
          //   1: "Default Skin Tone",
          //   2: "Light Skin Tone",
          //   3: "Medium-Light Skin Tone",
          //   4: "Medium Skin Tone",
          //   5: "Medium-Dark Skin Tone",
          //   6: "Dark Skin Tone",
          // },
        }}
      />
    </div>
  );
};
