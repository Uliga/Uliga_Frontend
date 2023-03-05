import React from "react";
import { Wrapper, Logo, NoneImg, StyledP } from "./index.styles";

export type SignupButtonProps = {
  href?: string;
  ImgSrc?: string;
  size?: number;
  title?: string;
  className?: string;
  color?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function LoginButton({
  href,
  ImgSrc,
  title,
  className,
  color = "white",
  size = 3,
  onClick,
}: SignupButtonProps) {
  return (
    <Wrapper className={className} href={href} color={color} onClick={onClick}>
      {ImgSrc === "none" ? (
        <NoneImg size={size} />
      ) : (
        <Logo src={ImgSrc} alt={title} size={size} />
      )}
      <StyledP>{title}</StyledP>
    </Wrapper>
  );
}
