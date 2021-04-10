import Link from "next/link";
import { VFC } from "react";

type Props = {
  id: number;
  emoji: string;
};

export const HomeEmoji: VFC<Props> = (props) => {
  return (
    <Link
      key={props.id}
      href={{
        pathname: "/posts/[postId]",
        query: { postId: props.id },
      }}
    >
      <a className="m-5 p-5 transition duration-200 text-center text-4xl sm:text-4xl hover:bg-gray-100 dark:hover:bg-semiDark border-fontDark rounded-lg filter blur-sm hover:blur-0">
        {props.emoji}
      </a>
    </Link>
  );
};
