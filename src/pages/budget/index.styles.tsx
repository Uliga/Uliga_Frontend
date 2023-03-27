import styled from "styled-components";
import COLORS from "../../constants/color";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  padding: 4rem;
  flex-direction: column;
  color: ${COLORS.GREY[600]};
  h1 {
    font-weight: 700;
    font-size: 2rem;
  }
  h4 {
    padding-top: 0.7rem;
    font-size: 1.4rem;
    color: ${COLORS.GREY[400]};
  }
`;
export const BudgetBox = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;
