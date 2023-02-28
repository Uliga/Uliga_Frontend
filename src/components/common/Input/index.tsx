import React from "react";
import styled from "styled-components";
import { GREY } from "../../../constants/color";

const Wrapper = styled.div``;
const Label = styled.div`
  font-size: 1.3rem;
  color: ${GREY[500]};
  padding-bottom: 1rem;
`;

const InputWrapper = styled.input<{
  size: number;
}>`
  ${({ size }) => `
    width: ${size}rem;
`}
  padding: 1.5rem 1.2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[300]};
  color: ${GREY[500]};
  font-size: 1.3rem;
  ::placeholder {
    color: ${GREY[400]};
  }
`;

type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  labelExist?: boolean;
  label?: string;
  size?: number;
  required?: boolean;
  className?: string;
};

export default function Input({
  value,
  onChange,
  type,
  placeholder = "내용을 입력해주세요.",
  labelExist,
  label,
  size = 35,
  required,
  className,
}: InputProps) {
  return (
    <Wrapper className={className}>
      {labelExist && <Label>{label}</Label>}
      <InputWrapper
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        size={size}
        required={required}
      />
    </Wrapper>
  );
}
