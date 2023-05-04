import styled from "styled-components";
import COLORS from "../../constants/color";
import media from "../../styles/media";

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
  ${media.medium} {
    padding: 4rem 0;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const TabButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => `
  font-weight: ${isSelected && 700};
  color : ${isSelected ? COLORS.GREY[600] : COLORS.GREY[300]};
  border: none;
  border-bottom :${isSelected ? `0.3rem solid ${COLORS.GREY[600]}` : `none`};
`}
  cursor: pointer;
  padding: 1.5rem 1rem;
  background-color: transparent;
  font-size: 1.4rem;
  margin-right: 1rem;
`;

export const ScheduleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
