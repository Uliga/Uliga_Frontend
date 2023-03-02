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
  GREY,
  BLACK,
} from "../../../constants/color";
import Icons from "../../../constants/icon";

type ButtonTheme = "normal" | "primary" | "secondary" | "tertiary";

type IconButtonProps = {
  className?: string;
  /** icon 종류 */
  iconName: string;
  /** 버튼 안의 내용 */
  title?: string;
  /** 버튼의 테마 */
  theme?: ButtonTheme;
  /** 커스텀시 버튼 너비 */
  width?: string;
  /** 커스텀시 버튼 높이 */
  height?: string;
  /** 버튼 활성화 여부 */
  disabled?: boolean;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** iconButton 너비조정 */
  widthSize?: number;
  /** iconButton 높이조정 */
  heightSize?: number;
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
  /** icon 크기조정 */
  iconSize?: string;
  /** icon 색 조정 */
  color?: string;
  /** border 조정 */
  border?: number;
};

const Wrapper = styled.button<{
  widthSize: number;
  heightSize: number;
  ButtonTheme: ButtonTheme;
  disabled: boolean;
  width: string;
  height: string;
  iconName?: string;
  iconOnly: boolean;
}>`
  ${({ heightSize, widthSize, ButtonTheme, iconOnly }) => `
    font-size: 1.125rem;
    height: ${iconOnly === true ? "none" : heightSize}rem;
    width: ${iconOnly === true ? "none" : widthSize}rem;
    background-color:  ${
      iconOnly === true
        ? "transparent"
        : { normal: WHITE, primary: BLUE, secondary: YELLOW, tertiary: WHITE }[
            ButtonTheme
          ]
    }};
    padding: ${
      iconOnly === true
        ? "none"
        : {
            normal: "0",
            primary: "1.5rem 1rem",
            secondary: "1.5rem 1rem",
            tertiary: "1.5rem 1rem",
          }[ButtonTheme]
    }
    };
     border: ${ButtonTheme === "tertiary" ? `0.08rem solid ${BLUE} ` : "none"};
     gap: ${ButtonTheme === "normal" ? "0.6rem" : "0.5rem"};

     color:  ${
       iconOnly === true
         ? "none"
         : { normal: BLACK, primary: WHITE, secondary: WHITE, tertiary: BLUE }[
             ButtonTheme
           ]
     }};
    &:hover{
      background-color:  ${
        iconOnly === true
          ? "none"
          : {
              normal: "transparent",
              primary: MEDIUM_BLUE,
              secondary: LIGHT_YELLOW,
              tertiary: WHITE,
            }[ButtonTheme]
      };
   
      color: ${
        iconOnly === true
          ? "none"
          : {
              normal: GREY[400],
              primary: WHITE,
              secondary: WHITE,
              tertiary: DARK_BLUE,
            }[ButtonTheme]
      }};
     cursor: pointer;
    }
`}
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
`;

const StyledIcon = styled.i<{ border: number }>`
  ${({ border }) => `
   -webkit-text-stroke: ${border}px;
`}
`;
export default function IconButton({
  title,
  theme = "primary",
  widthSize = 12.75,
  disabled = false,
  width,
  onClick,
  iconName,
  iconSize = "1.5rem",
  iconOnly = false,
  color,
  border = 0.1,
  className,
  height,
  heightSize = 3.2575,
}: IconButtonProps) {
  return (
    <Wrapper
      className={className}
      widthSize={widthSize}
      heightSize={heightSize}
      height={height!}
      iconOnly={iconOnly}
      ButtonTheme={theme}
      onClick={onClick}
      disabled={disabled}
      width={width!}
    >
      <StyledIcon
        className={Icons[iconName]}
        style={{ fontSize: iconSize, color }}
        border={border}
      />
      {title}
    </Wrapper>
  );
}
