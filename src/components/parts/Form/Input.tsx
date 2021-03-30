import { VFC } from "react";

type Input = {
  inputs: {
    name: string;
    type: string;
    value: any;
    onChange: any;
  }[];
};

export const InputForm: VFC<Input> = ({ inputs }) => {
  return (
    <div>
      {inputs.map((props) => (
        <label className="flex flex-col" key={props.name}>
          <span>{props.name}</span>
          <input
            className="bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded"
            onChange={props.onChange}
            {...props}
          />
        </label>
      ))}
    </div>
  );
};
