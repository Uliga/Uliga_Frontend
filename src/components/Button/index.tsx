import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/color";

type ButtonTheme =
  | "primary"
  | "secondary"
  | "tertiary"
  | "unfocus"
  | "quaternary"
  | "basic";
type ButtonSize = "large" | "medium" | "small";
type ButtonType = "button" | "submit" | "reset" | undefined;
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
  /** 버튼 타입 */
  type?: ButtonType;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  dataCy?: string;
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
       {
         primary: COLORS.BLUE,
         secondary: COLORS.YELLOW,
         tertiary: COLORS.WHITE,
         unfocus: COLORS.WHITE,
         quaternary: COLORS.LIGHT_BLUE,
         basic: COLORS.WHITE,
       }[ButtonTheme]
     };
     border: ${
       ButtonTheme === "tertiary" ? `0.08rem solid ${COLORS.BLUE} ` : "none"
     };
     border: ${
       ButtonTheme === "basic" ? `0.08rem solid ${COLORS.GREY[300]} ` : "none"
     };
     color: ${
       (disabled && "#CCCCCF") ||
       {
         primary: COLORS.WHITE,
         secondary: COLORS.WHITE,
         tertiary: COLORS.BLUE,
         unfocus: COLORS.BLUE,
         quaternary: COLORS.BLUE,
         basic: COLORS.GREY[400],
       }[ButtonTheme]
     };
    &:hover{
      background-color: ${
        (disabled && "#F2F4F7") ||
        {
          primary: COLORS.MEDIUM_BLUE,
          secondary: COLORS.LIGHT_YELLOW,
          tertiary: COLORS.WHITE,
          unfocus: COLORS.LIGHT_BLUE,
          quaternary: COLORS.BLUE,
          basic: COLORS.WHITE,
        }[ButtonTheme]
      };
   
     color: ${
       (disabled && "#CCCCCF") ||
       {
         primary: COLORS.WHITE,
         secondary: COLORS.WHITE,
         tertiary: COLORS.DARK_BLUE,
         unfocus: COLORS.BLUE,
         quaternary: COLORS.WHITE,
         basic: COLORS.GREY[300],
       }[ButtonTheme]
     };
     cursor: ${disabled ? "default" : "pointer"};
    }
`}
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

export default function Button({
  title,
  theme = "primary",
  size = "medium",
  disabled = false,
  width,
  type = "button",
  onClick,
  className,
  dataCy = "",
}: ButtonProps) {
  return (
    <Wrapper
      className={className}
      size={size}
      ButtonTheme={theme}
      onClick={onClick}
      disabled={disabled}
      width={width!}
      type={type}
      data-cy={dataCy}
    >
      {title}
    </Wrapper>
  );
}
