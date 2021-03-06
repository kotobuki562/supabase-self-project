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
    { type: "email", name: "email", label: "email π¨", ref: register },
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <Form
          onSubmit={handleSubmit(handleResetPassword)}
          inputList={inputList}
          buttonText="γγΉγ―γΌγγͺγ»γγ"
        />
      </div>
    </Layout>
  );
};

export default Forgot;
