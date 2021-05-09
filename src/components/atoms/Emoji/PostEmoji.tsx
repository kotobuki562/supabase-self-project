import React, { VFC } from "react";
import { Emoji } from "emoji-mart";

type EmojiType = {
  id: string;
  imageUrl: string;
  skin: number;
};

export const PostEmoji: VFC<EmojiType> = ({ id, imageUrl, skin }) => {
  return (
    <p className="flex flex-col items-center p-5 m-5">
      {imageUrl ? (
        <div
          className="w-10 h-10"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
          }}
        />
      ) : null}
      {skin ? (
        <Emoji emoji={id} size={35} skin={skin} />
      ) : (
        <Emoji emoji={id} size={35} />
      )}
    </p>
  );
};
