import styled from "styled-components";
import Badge from "../../Badge";
import COLORS from "../../../constants/color";
import Button from "../../Button";
import IconButton from "../../IconButton";

export const Container = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${COLORS.GREY[100]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  min-height: 4.5rem;
  gap: 2rem;
  width: 90rem;
  align-items: center;
  font-size: 1.3rem;
  margin-left: 2rem;
  div {
    overflow: hidden;
    word-wrap: break-word;
  }
`;

export const Box = styled.div<{ width: number }>`
  ${({ width }) => `
       width: ${width}rem;
`}
  display: flex;
`;

export const IsIncome = styled(Badge)<{ isIncome: boolean }>`
  ${({ isIncome }) => `
  background-color: ${isIncome ? COLORS.RED.LIGHT : COLORS.GREEN.DARK};
  `}
`;

export const Value = styled.div`
  color: ${COLORS.BLUE};
  width: 8rem;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 2rem;
  height: 4.5rem;
  align-items: center;
  button {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const CommentButton = styled(Button)`
  height: 2.5rem;
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${COLORS.BLUE};
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${COLORS.GREY[400]};
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }

  > span {
    min-width: fit-content;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: ${COLORS.GREY[300]};
  }
`;

export const StyledCheckbox = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1.5px solid ${COLORS.GREY[300]};
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }

  :checked {
    background: center
      url("data:image/svg+xml,%3Csvg width='13' height='9' viewBox='-1 0 15 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='4.35645' width='2.23443' height='8.73182' rx='1' transform='rotate(-45 0 4.35645)' fill='%237798FC'/%3E%3Crect x='12.9287' width='2.23443' height='12.3435' rx='1' transform='rotate(39.9257 12.9287 0)' fill='%237798FC'/%3E%3C/svg%3E%0A");
    border: 0.1rem solid ${COLORS.BLUE};
    background-repeat: no-repeat;
  }

  :checked ~ span {
    color: #000000;
  }
`;

export const Top = styled.div`
  display: flex;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  padding-bottom: 1rem;
  position: relative;
`;

export const FilterButton = styled(IconButton)<{ isIncomeMenu: boolean }>`
  ${({ isIncomeMenu }) => `
    font-weight: ${isIncomeMenu ? "700" : "500"};
    border-right: ${isIncomeMenu ? `0.1rem solid ${COLORS.GREY[300]}` : "none"};
    margin-left: ${isIncomeMenu ? "0rem" : "2.5rem"};
    width: ${isIncomeMenu && "16.5rem"};
  `}
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: start;
  cursor: pointer;
  justify-content: start;
  gap: 1.5rem;
  border-radius: 0;
  background-color: transparent;
`;
export const HistoryWrapper = styled.div`
  position: relative;
`;

export const CategoryWrapper = styled.div`
  position: relative;
`;

export const WriteButton = styled.button`
  position: absolute;
  bottom: 1.3rem;
  right: 0;
  border: 0.1rem solid ${COLORS.BLUE};
  border-radius: 20rem;
  background-color: white;
  padding: 0.7rem 1.5rem;
  color: ${COLORS.BLUE};
  cursor: pointer;
`;
export const Menus = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 2rem;
  width: 90rem;
  margin-left: 5.5rem;
`;

export const Menu = styled.div<{ size: number }>`
  ${({ size }) => `
      width: ${size}rem;
`}
  font-size: 1.4rem;
`;
