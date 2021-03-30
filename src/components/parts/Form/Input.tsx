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
        <label key={props.name}>
          <span>{props.name}</span>
          <input onChange={props.onChange} {...props} />
        </label>
      ))}
    </div>
  );
};
