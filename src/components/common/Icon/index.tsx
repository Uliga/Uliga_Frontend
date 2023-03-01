import React from "react";
import styled from "styled-components";
import Icons from "../../../constants/icon";
import "bootstrap-icons/font/bootstrap-icons.css";

interface IconProps {
  className: string;
  size?: string;
  color?: string;
  border?: number;
}

const StyledIcon = styled.i<{ border: number }>`
  ${({ border }) => `
   -webkit-text-stroke: ${border}px;
`}
`;

function Icon({ className, size = "1.5rem", color, border = 0.1 }: IconProps) {
  return (
    <StyledIcon
      className={Icons[className]}
      style={{ fontSize: size, color }}
      border={border}
    />
  );
}

export default Icon;
