import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../../atoms/Form/Form";
import { supabase } from "../../../util/supabase";
import { Layout } from "../../layout";
import Link from "next/link";

type IForm = {
  email: string;
  password: string;
};

const Signin = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const handleSignin = ({ email, password }: IForm) => {
    supabase.auth.signIn({ email, password });
  };

  const inputList = [
    { type: "email", name: "email", label: "email π¨", ref: register },
    {
      type: "password",
      name: "password",
      label: "password π",
      ref: register,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-around">
        <Form
          onSubmit={handleSubmit(handleSignin)}
          inputList={inputList}
          buttonText="γ΅γ€γ³γ€γ³"
        />
        <div className="flex justify-around">
          <Link href="/signup">
            <a className="text-darkSushi dark:text-sushi underline hover:no-underline">
              ζ°θ¦η»ι²
            </a>
          </Link>
          <Link href="/forgot">
            <a className="text-darkSushi dark:text-sushi underline hover:no-underline">
              γγΉγ―γΌγγγεΏγγ§γγοΌ
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
