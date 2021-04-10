import List from "../../models/lists/list";
import { supabase } from "../../util/supabase";

export const getAllListsData = async (catchData: List[]) => {
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
