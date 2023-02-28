/* eslint-disable react/button-has-type */
import React from "react";
import styled from "styled-components";
import {
  BLUE,
  YELLOW,
  MEDIUM_BLUE,
  LIGHT_BLUE,
  LIGHT_YELLOW,
  DARK_BLUE,
  WHITE,
} from "../../../constants/color";

type ButtonTheme = "primary" | "secondary" | "tertiary" | "unfocus";
type ButtonSize = "large" | "medium" | "small";
type ButtonProps = {
  /** 버튼 안의 내용 */
  title?: string;
  /** 버튼의 테마 */
  theme?: ButtonTheme;
  /** large, medium, small 사이즈 중 택1 */
  size?: ButtonSize;
  /** 버튼 활성화 여부 */
  disabled?: boolean;
  /** 버튼 너비 */
  width?: string;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Wrapper = styled.button<{
  size: ButtonSize;
  ButtonTheme: ButtonTheme;
  disabled: boolean;
  width: string;
  className?: string;
}>`
  ${({ size, ButtonTheme, width, disabled }) => `
    width: ${width};
    font-size: ${{ large: "1.2rem", medium: "1rem", small: "0.75rem" }[size]};
     padding: ${
       {
         large: "0.5rem 1.5rem",
         medium: "0.5rem 1rem",
         small: "0.5rem 0.875rem",
       }[size]
     };
     background-color: ${
       (disabled && "#F2F4F7") ||
       { primary: BLUE, secondary: YELLOW, tertiary: WHITE, unfocus: WHITE }[
         ButtonTheme
       ]
     };
     border: ${ButtonTheme === "tertiary" ? `0.08rem solid ${BLUE} ` : "none"};
     color: ${
       (disabled && "#CCCCCF") ||
       { primary: WHITE, secondary: WHITE, tertiary: BLUE, unfocus: BLUE }[
         ButtonTheme
       ]
     };
    &:hover{
      background-color: ${
        (disabled && "#F2F4F7") ||
        {
          primary: MEDIUM_BLUE,
          secondary: LIGHT_YELLOW,
          tertiary: WHITE,
          unfocus: LIGHT_BLUE,
        }[ButtonTheme]
      };
   
     color: ${
       (disabled && "#CCCCCF") ||
       { primary: WHITE, secondary: WHITE, tertiary: DARK_BLUE, unfocus: BLUE }[
         ButtonTheme
       ]
     };
     cursor: ${disabled ? "default" : "pointer"};
    }
`}
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
`;

export default function Button({
  title,
  theme = "primary",
  size = "medium",
  disabled = false,
  width,
  onClick,
  className,
}: ButtonProps) {
  return (
    <Wrapper
      className={className}
      size={size}
      ButtonTheme={theme}
      onClick={onClick}
      disabled={disabled}
      width={width!}
    >
      {title}
    </Wrapper>
  );
}
