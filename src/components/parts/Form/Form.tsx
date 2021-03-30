import { VFC } from "react";

type IProps = {
  onSubmit: any;
  buttonText: string;
  inputList: {
    name: string;
    ref?: any;
    type: string;
    value?: any;
    onChange?: any;
  }[];
};

export const Form: VFC<IProps> = ({ onSubmit, buttonText, inputList }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        {inputList.map((props) => (
          <label key={props.name} className="flex flex-col items-center mb-4">
            <span>{props.name}</span>
            <input
              className="bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded"
              onChange={props.onChange}
              {...props}
            />
          </label>
        ))}
        <button
          type="submit"
          className="flex items-center shadow dark:border-sushi border-darkSushi border-2 rounded-full  px-4 py-2 dark:text-sushi text-darkSushi hover:bg-darkSushi dark:hover:bg-sushi hover:text-white dark:hover:text-black transition duration-200"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};
