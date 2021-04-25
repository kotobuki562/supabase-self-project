import { supabase } from "../../util/supabase";
import CustomEmoji from "../../models/customEmoji/customEmoji";

const storage = supabase.storage;

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

// export const uploadEmojiImageFile = async (name: string, image: any) => {
//   const uploadImage = await storage.uploadFile(`/customEmojis/${name}`, image);
//   const getImageUrl = await storage.url
// };
