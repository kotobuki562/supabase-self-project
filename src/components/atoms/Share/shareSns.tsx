import type { ReactNode, VFC } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
} from "react-share";

type Props = {
  id?: string;
  title?: string;
};

export const ShareSNS: VFC<Props> = (props) => {
  return (
    <>
      <p className="mt-10 font-bold text-2xl">SHARE</p>
      <div className="flex justify-around w-72 mt-4 mb-8">
        <TwitterShareButton
          url={`https://emoji-diary.vercel.app/posts/${props.id}`}
          title={`emoji日記 | ${props.title} #emoji日記 #emojiDiary`}
        >
          <TwitterIcon size={45} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          url={`https://emoji-diary.vercel.app/posts/${props.id}`}
        >
          <FacebookIcon size={45} round={true} />
        </FacebookShareButton>
        <LineShareButton
          url={`https://emoji-diary.vercel.app/posts/${props.id}`}
          title={props.title}
        >
          <LineIcon size={45} round={true} />
        </LineShareButton>
      </div>
    </>
  );
};
