import React, { useState, useEffect } from "react";
import axios from "axios";
import { storage, supabase } from "../../util/supabase";
import { icons } from "../../../public/Icon";
import { Layout } from "../../components/layout";
import { InputForm } from "../../components/atoms/Input/Input";
import { Button } from "../../components/atoms/Button/Button";

const Create = () => {
  const [name, setName] = useState<string>("");
  const [imageFile, setImageFile] = useState<File>(null);
  const textInputs = [
    {
      type: "name",
      name: "name",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "登録するemojiの名前は？🤔",
    },
  ];

  // const bucketName = "customEmoji";
  // const url = `${supabase.storage.url}/object/${bucketName}/${imageFile.name}`;
  // const headers = supabase.storage.headers;
  // console.log(url, headers);

  const handleChange = (e: any) => {
    const file = e.target?.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const img = document.getElementById("image") as HTMLImageElement;
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    setImageFile(file);
  };

  const uploadImageToSupabase = async (e): Promise<void> => {
    e.preventDefault();
    // const bucketName = "customEmoji";
    // const url = `${supabase.storage.url}/object/${bucketName}/${imageFile.name}`;
    // const headers = supabase.storage.headers;
    // const formData = new FormData();
    // formData.append("file", imageFile);

    // await axios.post(url, formData, {
    //   headers,
    // });

    const { data, error } = await storage
      .from("customEmoji")
      .upload(imageFile.name, imageFile);
    // .then((img) => {
    //   console.log(img.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  return (
    <Layout
      meta={{
        pageName: "emoji日記 | 今日あったことを30秒で振り返りませんか？",
        cardImage:
          "https://user-images.githubusercontent.com/67810971/113526962-e320c080-95f6-11eb-8f5d-22d1aa1ba5da.png",
        description:
          "今日の出来事を30秒で振り返って、絵文字を載せて振り返りましょう。今の心境を語るでもよし！",
      }}
    >
      <div className="p-8">
        <InputForm inputs={textInputs} />
        {imageFile ? (
          <img
            src=""
            alt="読み込みに失敗した"
            id="image"
            className="h-60 w-full object-contain"
          />
        ) : null}
        <input
          onChange={handleChange}
          className="hidden"
          accept="image/*"
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <div className="w-full">
            <img
              className="w-20 h-20"
              src={icons.imageUploadIcon}
              alt="upload"
            />
          </div>
        </label>
        <Button
          btnText="Create!"
          type="other"
          onClick={uploadImageToSupabase}
          size="sm"
        />
      </div>
    </Layout>
  );
};

export default Create;
