import React from "react";
import { icons } from "../../public/Icon";
import { Layout } from "../components/layout";
import { Button } from "../components/atoms/Button/Button";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  return (
    <Layout
      meta={{
        pageName: "該当のページが見つかりません💦",
      }}
    >
      <div className="flex flex-col items-center w-full p-8 sm:p-10">
        <h1 className="text-lg sm:text-2xl mb-8">
          該当のページが見つかりません💦
        </h1>
        <p className="text-6xl mb-8">404</p>
        <div className="flex flex-col items-center w-full mb-8">
          <img
            className="w-48 sm:w-72"
            src={icons.notFoundIcon}
            alt="not found"
          />
        </div>
        <Button
          btnText="Back Home"
          size="md"
          type="delete"
          onClick={() => router.push("/")}
        />
      </div>
    </Layout>
  );
};

export default NotFound;
