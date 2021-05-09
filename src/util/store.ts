import React, { useState, useEffect, Dispatch, useMemo, VFC } from "react";
import { supabase } from "./supabase";

export const useStore = (postId: number) => {
  const [emojis, setEmojis] = useState<any[]>([]);
  const [newEmoji, setNewEmoji] = useState(null);

  useEffect(() => {
    const emojiListener = supabase
      .from("emojis")
      .on("INSERT", (payload) => setNewEmoji(payload.new))
      .subscribe();
    return () => {
      emojiListener.subscribe();
    };
  }, []);

  useEffect(() => {
    if (postId) {
      fetchEmojis(postId, (emojis) => {
        emojis.forEach((emoji) => {
          setEmojis(emojis);
        });
      });
    }
  }, [postId]);

  useEffect(() => {
    if (newEmoji && newEmoji.list_id === postId) {
      const handleAsync = async () => {
        setEmojis(emojis.concat(newEmoji));
      };
      handleAsync();
    }
  }, [newEmoji]);
  return { emojis: emojis.map((emoji) => ({ ...emoji })) };
};

export const fetchEmojis = async (
  postId: number,
  setState: React.Dispatch<any>
) => {
  try {
    let { body } = await supabase
      .from("emojis")
      .select("*")
      .eq("list_id", postId);
    if (setState) setState(body);
    return body;
  } catch (error) {
    console.log(error);
  }
};

export const addEmoji = async (id, emojiInfo, today) => {
  try {
    let { body } = await supabase
      .from("emojis")
      .insert([{ list_id: id, emojiInfo: emojiInfo, createAt: today }]);
    return body;
  } catch (error) {
    console.log(error);
  }
};
