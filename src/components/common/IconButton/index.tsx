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
import Wrapper from "./index.styles";

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
  /** 버튼 활성화 여부 */
  disabled?: boolean;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** iconButton 너비조정 */
  widthSize?: number;
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
  /** icon 크기조정 */
  iconSize?: string;
  /** icon 색 조정 */
  color?: string;
  /** border 조정 */
  border?: number;
};

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
  onClick,
  iconName,
  iconSize = "1.5rem",
  iconOnly = false,
  color,
  border = 0.1,
  className,
}: IconButtonProps) {
  return (
    <Wrapper
      className={className}
      widthSize={widthSize}
      iconOnly={iconOnly}
      ButtonTheme={theme}
      onClick={onClick}
      disabled={disabled}
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
