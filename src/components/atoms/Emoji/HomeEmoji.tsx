import Link from "next/link";
import { Emoji } from "emoji-mart";
import { VFC } from "react";

type Props = {
  id: number;
  emojiId: string;
  emojiSkin: number | null;
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
      {/* filter blur-sm hover:blur-0 */}
      <a className="m-5 p-5 transition duration-200 text-center text-4xl sm:text-4xl hover:bg-gray-100 dark:hover:bg-semiDark border-fontDark rounded-lg">
        {!props.emojiSkin ? (
          <Emoji emoji={props.emojiId} set="apple" size={35} />
        ) : (
          <Emoji
            emoji={props.emojiId}
            set="apple"
            size={35}
            skin={props.emojiSkin}
          />
        )}
      </a>
    </Link>
  );
};
