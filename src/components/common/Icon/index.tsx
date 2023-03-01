import React from "react";
import styled from "styled-components";
import Icons from "../../../constants/icon";
import "bootstrap-icons/font/bootstrap-icons.css";

interface IconProps {
  className?: string;
  iconName: string;
  size?: string;
  color?: string;
  border?: number;
}

const Wrapper = styled.div`
  background-color: transparent;
`;
const StyledIcon = styled.i<{ border: number }>`
  ${({ border }) => `
   -webkit-text-stroke: ${border}px;
`}
`;

function Icon({
  className,
  iconName,
  size = "1.5rem",
  color,
  border = 0.1,
}: IconProps) {
  return (
    <Wrapper className={className}>
      <StyledIcon
        className={Icons[iconName]}
        style={{ fontSize: size, color }}
        border={border}
      />
    </Wrapper>
  );
}

export default Icon;
