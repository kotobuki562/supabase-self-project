import React, { VFC } from "react";
import { ShareSNS } from "../../parts/Share/shareSns";

type DiaryInfo = {
  id: string;
  name: string;
  emoji: string;
  title: string;
  text: string;
  createAt: string;
  category: string;
};

const Diary: VFC<DiaryInfo> = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-7xl sm:text-9xl">{props.emoji}</h2>
      </div>
      <article>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <p>{props.createAt}</p>
      </article>
      <p>{props.name}</p>
      <ShareSNS id={props.id} title={props.title} />
    </div>
  );
};

export default Diary;
