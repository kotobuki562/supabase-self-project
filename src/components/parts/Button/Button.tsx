import { VFC } from "react";
import cc from "classcat";

type Btninfo = {
  btnText: string;
  type: "agree" | "delete" | "other";
  onClick: any;
  disabled?: any;
};
export const Button: VFC<Btninfo> = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={cc([
        "font-semibold tracking-wide flex items-center border-2 rounded-full  px-4 py-2 transition duration-200 hover:text-white dark:hover:text-black outline-none",
        props.type === "other"
          ? "dark:border-sushi border-darkSushi dark:text-sushi text-darkSushi hover:bg-darkSushi dark:hover:bg-sushi"
          : null,
        props.type === "delete"
          ? "dark:border-red-500 border-red-600 dark:text-red-500 text-red-600 hover:bg-red-600 dark:hover:bg-red-500"
          : null,
      ])}
    >
      {props.btnText}
    </button>
  );
};
