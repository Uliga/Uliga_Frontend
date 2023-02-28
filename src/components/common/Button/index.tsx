/* eslint-disable react/button-has-type */
import React from "react";
import styled from "styled-components";

type ButtonTheme = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "medium" | "large";
type ButtonProps = {
  title: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  width?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Wrapper = styled.button<{
  title: string;
  theme?: ButtonTheme;
  disabled?: boolean;
  width?: string;
}>`
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Button({
  title,
  theme = "primary",
  size,
  disabled = false,
  width,
  onClick,
}: ButtonProps) {
  return <Wrapper>{title}</Wrapper>;
}
