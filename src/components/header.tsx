import React from "react";
import { useTheme } from "next-themes";
import { supabase } from "../util/supabase";
import { icons } from "../../public/Icon";
import { useRouter } from "next/router";
import { Button } from "../components/parts/Button/Button";
import Link from "next/link";

export const Header = () => {
  const user = supabase.auth.user();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const switchTheme = async () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header>
      <nav className="flex justify-between items-center px-4 py-2">
        {theme === "light" ? (
          <Link href="/">
            <a className="text-darkSushi dark:text-sushi text-base sm:text-lg">
              emoji日記😊
            </a>
          </Link>
        ) : (
          <Link href="/">
            <a className="text-darkSushi dark:text-sushi text-base sm:text-lg">
              emoji日記😎
            </a>
          </Link>
        )}

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
            {theme === "light" ? (
              <img
                className="w-10 sm:w-14 outline-none"
                src={icons.sunIcon}
                alt="sun"
              />
            ) : (
              <img
                className="w-10 sm:w-14 outline-none"
                src={icons.moonIcon}
                alt="moon"
              />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
