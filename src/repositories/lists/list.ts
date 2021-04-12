import List from "../../models/lists/list";
import { supabase } from "../../util/supabase";

export const getAllListsData = async (catchData: List[]): Promise<any> => {
  try {
    const lists = await supabase.from("lists").select("*");
    const posts = lists.data;
    posts.map((post) => {
      const data = {
        ...post,
      };
      return catchData.push(data);
    });
  } catch (error) {
    console.log(error);
  }
};

export const setListToSupabase = (data: List, message: string): void => {
  const list = supabase
    .from("lists")
    .insert([
      {
        name: data.name,
        title: data.title,
        text: data.text,
        emoji: data.emoji,
        category: data.category,
        createAt: data.createAt,
        updateAt: data.updateAt,
      },
    ])
    .then(() => {
      alert(message);
      return list;
    });
};
