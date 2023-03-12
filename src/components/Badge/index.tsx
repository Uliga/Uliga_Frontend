import styled from "styled-components";
import React from "react";
import COLORS from "../../constants/color";
import IconButton from "../IconButton";

const Container = styled.div<{ size: number; color: string; bgColor: string }>`
  ${({ size, color, bgColor }) => `
    font-size: ${size}rem;
    color: ${color};
    background-color: ${bgColor || COLORS.GREY[100]};
  `}
  display: flex;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 30rem;
  align-items: center;
`;

export default function Badge({
  size,
  title,
  color = "black",
  bgColor = COLORS.GREY[100],
  iconColor,
  onClick,
  className,
}: {
  className?: string;
  size: number;
  title: string;
  color?: string;
  bgColor?: string;
  iconColor?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Container
      className={className}
      color={color}
      bgColor={bgColor}
      size={size}
    >
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
