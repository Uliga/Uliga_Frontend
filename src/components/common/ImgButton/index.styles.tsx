import styled from "styled-components";

const Wrapper = styled.a`
  ${({ color }) => `
  background-color: ${color};`}
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const Logo = styled.img<{ size: number }>`
  ${({ size }) => `
    width: ${size}rem;
    height: ${size}rem;

  `}
  margin-right: 1rem;
  object-fit: cover;
  border-radius: 10rem;
`;
const NoneImg = styled.div<{ size: number }>`
  ${({ size }) => `
    width: ${size}rem;
    height: ${size}rem;
  `}
`;
const StyledP = styled.p`
  font-weight: 700;
`;

export { Wrapper, Logo, NoneImg, StyledP };
