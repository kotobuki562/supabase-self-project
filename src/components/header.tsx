import React, { useMemo, useCallback } from "react";
import { useTheme } from "next-themes";
import { supabase } from "../util/supabase";
import { icons } from "../../public/Icon";
import { useRouter } from "next/router";
import { Button } from "./atoms/Button/Button";
import { MenuItem } from "../components/atoms/Menu/Menu";
import Link from "next/link";

export const Header = React.memo(() => {
  const user = supabase.auth.user();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

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
            <MenuItem />
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
            <MenuItem />
          </div>
        </nav>
      </header>
    );
  }
});

export default Header;
