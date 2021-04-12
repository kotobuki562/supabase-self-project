import "emoji-mart/css/emoji-mart.css";
import { Picker, Emoji } from "emoji-mart";
import { useTheme } from "next-themes";
import React, { useState, VFC } from "react";
type Props = {
  selectEmoji: any;
  emojiValue: {
    id: string;
    native: string;
  };
};
export const EmojiPicker: VFC<Props> = (props) => {
  const { theme } = useTheme();
  const { id, native } = props.emojiValue;
  const onSelect = (emoji) => {
    console.log({ emoji });
    props.selectEmoji({ id, native, ...emoji });
  };
  return (
    <div>
      <Picker
        theme={theme === "light" ? "light" : "dark"}
        showPreview={false}
        onSelect={(emoji) => onSelect({ ...emoji })}
        set="apple"
        style={{ color: "lightgray", width: "100%" }}
        title={
          <p className="text-base">
            {(
              <span className="text-base">
                {native} こちらでよろしいですか?
              </span>
            ) || "emojiを選んでください"}
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
            symbols: "シンボル",
            flags: "国旗",
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
        // custom={customEmojis}
      />
      {/* <p>{native}</p> */}
      {/* <Emoji
        emoji={id}
        size={32}
        set="apple"
        skin={skin ? skin : null}
        onClick={(emoji) => onSelect({ ...emoji })}
      /> */}
    </div>
  );
};
