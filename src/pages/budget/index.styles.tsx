import styled from "styled-components";
import COLORS from "../../constants/color";
import media from "../../styles/media";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  padding: 4rem;
  align-items: center;
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
  ${media.medium} {
    padding: 4rem 0;
  }
`;
export const BudgetBox = styled.div`
  display: flex;
  gap: 4rem;
  padding-top: 2rem;
  width: 100%;
  justify-content: space-between;
`;
