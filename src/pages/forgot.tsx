import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/parts/Form/Form";
import { supabase } from "../util/supabase";
import { Layout } from "../components/layout";

type IForm = {
  email: string;
};

const Forgot: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const handleResetPassword = ({ email }: IForm) => {
    supabase.auth.api.resetPasswordForEmail(email);
  };

  const inputList = [{ type: "email", name: "email", ref: register }];

  return (
    <Layout>
      <Form
        onSubmit={handleSubmit(handleResetPassword)}
        inputList={inputList}
        buttonText="パスワード再設定メール送信"
      />
    </Layout>
  );
};

export default Forgot;
