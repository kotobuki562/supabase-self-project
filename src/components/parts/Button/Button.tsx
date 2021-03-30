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
        'inline-block',
        props.type === "other"
          ? "flex items-center shadow dark:border-sushi border-darkSushi border-2 rounded-full  px-4 py-2 dark:text-sushi text-darkSushi hover:bg-darkSushi dark:hover:bg-sushi hover:text-white dark:hover:text-black transition delay-150 duration-300"
          : null,
        props.type === 'delete' ? "flex items-center shadow dark:border-red-400 border-red-600 border-2 rounded-full  px-4 py-2 dark:text-red-400 text-red-600 hover:bg-red-600 dark:hover:bg-red-400 hover:text-white dark:hover:text-black transition delay-150 duration-300" : null,
      ])}
    >
      {props.btnText}
    </button>
  );
};
