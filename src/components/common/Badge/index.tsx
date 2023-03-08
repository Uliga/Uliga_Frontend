import styled from "styled-components";
import React from "react";
import COLORS from "../../../constants/color";
import IconButton from "../IconButton";

const Container = styled.div<{ size: number; color: string }>`
  ${({ size, color }) => `
    font-size: ${size}rem;
    color: ${color};
  `}
  display: flex;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 30rem;
  align-items: center;
  background-color: ${COLORS.GREY[100]};
`;

export default function Badge({
  size,
  title,
  color = "black",
  iconColor,
  onClick,
}: {
  size: number;
  title: string;
  color?: string;
  iconColor?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Container color={color} size={size}>
      {title}
      {iconColor && (
        <IconButton
          iconOnly
          iconName="close"
          iconSize={`${size - 1}rem`}
          color={iconColor}
          onClick={onClick}
        />
      )}
    </Container>
  );
}
