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
    <form onSubmit={onSubmit}>
      {inputList.map((props) => (
        <label key={props.name}>
          <span>{props.name}</span>
          <input onChange={props.onChange} {...props} />
        </label>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};
