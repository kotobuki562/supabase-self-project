import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/parts/Form/Form";
import { supabase } from "../util/supabase";
import { Layout } from "../components/layout";
import Link from "next/link";

type IForm = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const handleSignin = ({ email, password }: IForm) => {
    supabase.auth.signIn({ email, password });
  };

  const inputList = [
    { type: "email", name: "email", label: "email 📨", ref: register },
    {
      type: "password",
      name: "password",
      label: "password 🔑",
      ref: register,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-around">
        <Form
          onSubmit={handleSubmit(handleSignin)}
          inputList={inputList}
          buttonText="サインイン"
        />
        <div className="flex justify-around">
          <Link href="/signup">
            <a className="text-darkSushi dark:text-sushi underline hover:no-underline">
              新規登録
            </a>
          </Link>
          <Link href="/forgot">
            <a className="text-darkSushi dark:text-sushi underline hover:no-underline">
              パスワードをお忘れですか？
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
