import styled from "styled-components";
import COLORS from "../../../constants/color";

export const Container = styled.div`
  color: ${COLORS.GREY[600]};
  padding: 3rem;
  h2 {
    text-align: start;
    font-weight: 700;
    padding-bottom: 2rem;
  }

  width: 100%;
  height: 50rem;
`;
export const Menus = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
`;

export const Menu = styled.div<{ size: number }>`
  ${({ size }) => `
      width: ${size}rem;
`}
  font-size: 1.4rem;
`;

export const Middle = styled.div`
  span {
    font-weight: 700;
  }
  font-size: 1.8rem;
  padding: 2rem 0;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  position: relative;
`;

export const HistoryWrapper = styled.div`
  height: 25rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
