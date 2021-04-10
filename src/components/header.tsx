import React from "react";
import { useTheme } from "next-themes";
import { supabase } from "../util/supabase";
import { icons } from "../../public/Icon";
import { useRouter } from "next/router";
import { Button } from "./atoms/Button/Button";
import { Switch } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  const user = supabase.auth.user();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const switchTheme = async () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (theme === "light") {
    return (
      <header>
        <nav className="flex justify-between items-center px-4 py-2">
          <Link href="/">
            <a className="text-darkSushi text-xl font-semibold sm:text-2xl flex items-center">
              <img
                className="w-32 sm:w-44"
                src="/images/emoji-title-dark.png"
                alt="logo"
              />
              😊
            </a>
          </Link>
          <div className="flex items-center">
            {user ? (
              <Button
                btnText="ログアウト"
                type="delete"
                size="sm"
                onClick={() => supabase.auth.signOut()}
              />
            ) : null}
            <button
              className="inline-block outline-none ml-4"
              onClick={(e) => {
                e.preventDefault();
                switchTheme();
              }}
            >
              <img
                className="w-14 sm:w-20 outline-none"
                src={icons.sunIcon}
                alt="sun"
              />
            </button>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav className="flex justify-between items-center px-4 py-2">
          <Link href="/">
            <a className="dark:text-sushi text-xl font-semibold sm:text-2xl flex items-center">
              <img
                className="w-32 sm:w-44"
                src="/images/emoji-title.png"
                alt="logo"
              />
              😎
            </a>
          </Link>
          <div className="flex items-center">
            {user ? (
              <Button
                btnText="ログアウト"
                type="delete"
                size="sm"
                onClick={() => supabase.auth.signOut()}
              />
            ) : null}
            <button
              className="inline-block outline-none ml-4"
              onClick={(e) => {
                e.preventDefault();
                switchTheme();
              }}
            >
              <img
                className="w-14 sm:w-20 outline-none"
                src={icons.moonIcon}
                alt="moon"
              />
            </button>
          </div>
        </nav>
      </header>
    );
  }
};

export default Header;
