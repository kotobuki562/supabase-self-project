import { supabase } from "../../util/supabase";
import CustomEmoji from "../../models/customEmoji/customEmoji";

export const getAllCustomEmojiData = async (catchData: any[]): Promise<any> => {
  try {
    const costoms = await supabase.from("customEmoji").select("*");
    const emojis = costoms.data;
    emojis.map((post) => {
      const data = {
        id: post.id,
        ...post,
      };
      return catchData.push(data);
    });
  } catch (error) {
    console.log(error);
  }
};
