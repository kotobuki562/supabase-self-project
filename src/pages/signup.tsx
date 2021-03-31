import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/parts/Form/Form";
import { supabase } from "../util/supabase";
import { Layout } from "../components/layout";

type IForm = {
  email: string;
  password: string;
  passwordConf: string;
};

const Signup: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const handleSignup = ({ email, password }: IForm) => {
    supabase.auth.signUp({ email, password });
  };

  const inputList = [
    { type: "email", name: "email", label: "email 📨", ref: register },
    {
      type: "password",
      name: "password",
      label: "password 🔑",
      ref: register,
    },
    {
      type: "password",
      name: "passwordConf",
      label: "password 🔑",
      ref: register,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <Form
          onSubmit={handleSubmit(handleSignup)}
          inputList={inputList}
          buttonText="サインアップ"
        />
      </div>
    </Layout>
  );
};

export default Signup;
