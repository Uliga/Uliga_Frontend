import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";

const Wrapper = styled.div``;
const Label = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[500]};
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
  border: 0.1rem solid ${COLORS.GREY[300]};
  color: ${COLORS.GREY[500]};
  font-size: 1.3rem;
  ::placeholder {
    color: ${COLORS.GREY[400]};
    font-weight: 300;
  }
`;

type InputProps = {
  /** input 안의 초깃값 */
  value: string;
  /** 변화가 일어났을떄 호출되는 함수 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** input type : ex> text,password,checkbox etc. */
  type?: string;
  /** 자리표시자 */
  placeholder?: string;
  /** label 숨길지 여부 */
  labelHidden?: boolean;
  /** label 내용 */
  label?: string;
  /** input 너비 */
  size?: number;
  /** 필수로 채워야하는 필드 */
  required?: boolean;
  className?: string;
};

export default function Input({
  value,
  onChange,
  type,
  placeholder = "내용을 입력해주세요.",
  labelHidden = false,
  label,
  size = 35,
  required = false,
  className,
}: InputProps) {
  return (
    <Wrapper className={className}>
      {!labelHidden && <Label>{label}</Label>}
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
