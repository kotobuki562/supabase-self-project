import React from "react";
import { useTheme } from "next-themes";
import { supabase } from "../util/supabase";
import { icons } from "../../public/Icon";
import { useRouter } from "next/router";
import {Button} from '../components/parts/Button/Button'

export const Header = () => {
  const user = supabase.auth.user();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const switchTheme = async () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header>
      <nav>
        <div>header</div>
        <div className="flex items-center">
          <button
            className="inline-block"
            onClick={(e) => {
              e.preventDefault();
              switchTheme();
            }}
          >
            {theme === "light" ? (
              <img className="w-20" src={icons.sunIcon} alt="sun" />
            ) : (
              <img className="w-20" src={icons.moonIcon} alt="moon" />
            )}
          </button>
          {user ? (
            <Button btnText="ログアウト" type="delete" onClick={()=>supabase.auth.signOut()} />
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
