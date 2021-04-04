import React, { VFC } from "react";
import { ShareSNS } from "../../atoms/Share/shareSns";

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

      <ShareSNS id={props.id} title={props.title} />
    </div>
  );
};

export default Diary;
