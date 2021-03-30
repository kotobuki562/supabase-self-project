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
    { type: "email", name: "email", ref: register },
    { type: "password", name: "password", ref: register },
    { type: "password", name: "passwordConf", ref: register },
  ];

  return (
    <Layout>
      <Form
        onSubmit={handleSubmit(handleSignup)}
        inputList={inputList}
        buttonText="サインアップ"
      />
    </Layout>
  );
};

export default Signup;
