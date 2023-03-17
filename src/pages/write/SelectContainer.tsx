import React from "react";
import { SelectContainer } from "./index.styles";

interface Props {
  options: Array<{ value: string | undefined; label: string }>;
  value?: any;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// eslint-disable-next-line react/function-component-definition
const SelectWindow: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <SelectContainer value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectContainer>
  );
};

export default SelectWindow;
