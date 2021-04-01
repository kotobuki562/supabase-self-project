import { VFC } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type Input = {
  inputs: {
    name: string;
    type: string;
    value: any;
    onChange: any;
    leftIcon?: any;
    placeholder?: string;
  }[];
};

export const InputForm: VFC<Input> = ({ inputs }) => {
  return (
    <div>
      {inputs.map((props) => (
        <label className="flex flex-col" key={props.name}>
          <span>{props.name}</span>
          <InputGroup>
            {props.leftIcon ? (
              <InputLeftElement
                pointerEvents="none"
                children={props.leftIcon}
              />
            ) : null}
            <Input
              focusBorderColor="gray.300"
              className="bg-opacity-0 py-1 px-2 rounded border border-fontDark outline-none shadow-none"
              onChange={props.onChange}
              {...props}
            />
          </InputGroup>
        </label>
      ))}
    </div>
  );
};
