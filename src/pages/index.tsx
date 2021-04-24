import { Layout } from "../components/layout";
import Link from "next/link";
import { getAllListsData } from "../repositories/lists/list";
import List from "../models/lists/list";
import { HomeEmoji } from "../components/atoms/Emoji/HomeEmoji";

export async function getStaticProps() {
  const posts: List[] = [];
  await getAllListsData(posts);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

const Home = ({ posts }) => {
  // console.log(posts);

  return (
    <Layout
      meta={{
        pageName: "emoji日記 | 今日の出来事を絵文字で現そう。",
        description:
          "今日の出来事を30秒で振り返りませんか？良い思い出もあれば悪い思い出もある。それで良いのです。",
        cardImage:
          "https://user-images.githubusercontent.com/67810971/113526962-e320c080-95f6-11eb-8f5d-22d1aa1ba5da.png",
      }}
    >
      <div className="flex flex-col w-full px-4">
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7">
          {posts.map((post) => {
            return (
              <HomeEmoji
                key={post.id}
                id={post.id}
                emojiId={post.emojiInfo.id}
                emojiSkin={post.emojiInfo.skin}
                imageUrl={post.emojiInfo.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
