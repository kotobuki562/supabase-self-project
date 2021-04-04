import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../../atoms/Form/Form";
import { supabase } from "../../../util/supabase";
import { Layout } from "../../layout";

type IForm = {
  email: string;
};

const Forgot = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const handleResetPassword = ({ email }: IForm) => {
    supabase.auth.api.resetPasswordForEmail(email);
  };

  const inputList = [
    { type: "email", name: "email", label: "email 📨", ref: register },
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <Form
          onSubmit={handleSubmit(handleResetPassword)}
          inputList={inputList}
          buttonText="パスワードリセット"
        />
      </div>
    </Layout>
  );
};

export default Forgot;
