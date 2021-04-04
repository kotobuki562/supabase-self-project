import React, { VFC } from "react";
import { ShareSNS } from "../../atoms/Share/shareSns";

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

      <ShareSNS id={props.id} title={props.title} />
    </div>
    // <div>
    //   <div className="flex flex-col items-center">
    //     <h2 className="text-7xl sm:text-9xl mb-4">{props.emoji}</h2>
    //   </div>
    //   <section>
    //     <h1>{props.title}</h1>
    //     <p>{props.text}</p>
    //     <p>{props.createAt}</p>
    //   </section>
    //   <p>{props.name}</p>
    //   <ShareSNS id={props.id} title={props.title} />
    // </div>
  );
};

export default Diary;
