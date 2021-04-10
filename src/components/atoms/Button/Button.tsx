import { VFC, useState, MouseEventHandler } from "react";
import cc from "classcat";

type Btninfo = {
  btnText: string;
  type: "agree" | "delete" | "other";
  onClick: MouseEventHandler<HTMLButtonElement>;
  size: "sm" | "md" | "lg";
  disabled?: boolean;
};
export const Button: VFC<Btninfo> = (props) => {
  return (
    <div>
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={cc([
          "flex items-center font-semibold tracking-wide rounded-full transition duration-200 hover:text-white dark:hover:text-dark outline-none",
          props.size === "sm"
            ? "border-2 px-4 py-2 text-sm sm:text-base"
            : null,
          props.size === "md"
            ? "border-2 px-4 py-2 text-base sm:text-lg"
            : null,
          props.size === "lg" ? "border-2 px-4 py-2 text-lg sm:text-xl" : null,
          props.type === "other"
            ? "dark:border-sushi border-darkSushi dark:text-sushi text-darkSushi hover:bg-darkSushi dark:hover:bg-sushi"
            : null,
          props.type === "delete"
            ? "border-red-600 text-red-600 hover:bg-red-600 dark:border-red-500 dark:text-red-500  dark:hover:bg-red-500"
            : null,
          props.disabled
            ? "border-fontDark text-fontDark hover:bg-fontDark"
            : null,
        ])}
      >
        {props.btnText}
      </button>
    </div>
  );
};
