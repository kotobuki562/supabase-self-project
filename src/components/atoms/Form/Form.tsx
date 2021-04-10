import { ChangeEventHandler, FormEventHandler, LegacyRef, VFC } from "react";
import { Input } from "@chakra-ui/react";

type IProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  buttonText: string;
  inputList: {
    name: string;
    ref?: LegacyRef<HTMLInputElement>;
    type: string;
    value?: string | number | readonly string[];
    label: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
  }[];
};

export const Form: VFC<IProps> = ({ onSubmit, buttonText, inputList }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        {inputList.map((props) => (
          <label key={props.name} className="flex flex-col items-center mb-8">
            <span>{props.label}</span>
            <Input
              focusBorderColor="gray.300"
              className="py-1 px-2 rounded border border-fontDark outline-none shadow-none"
              {...props}
            />
          </label>
        ))}
        <button
          type="submit"
          className="flex items-center font-semibold dark:border-sushi border-darkSushi border-2 rounded-full  px-4 py-2 dark:text-sushi text-darkSushi hover:bg-darkSushi dark:hover:bg-sushi hover:text-white dark:hover:text-black transition duration-200"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};
