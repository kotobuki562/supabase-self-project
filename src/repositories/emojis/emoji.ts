import Emoji from "../../models/emojis/emoji";
import { supabase } from "../../util/supabase";
import React, { useState, useEffect, useMemo } from "react";
import { SupabaseClient } from "@supabase/supabase-js";

const useDatabase = () => {
  // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  return useMemo(() => supabase.from("emojis").select("*"), []);
};

const useFetchData = (ref: any) => {
  const [data, setData] = useState<{ [id: number]: number }>();
  useEffect(() => {
    ref
      .from("emojis")
      .select("*")
      .then((emoji) => {
        if (emoji.body) {
          setData(emoji.body);
        }
      });
    return () => {
      ref();
    };
  }, [ref]);
  return { data };
};

export const useFetchAllData = () => {
  const ref = useDatabase();
  return useFetchData(ref);
};
