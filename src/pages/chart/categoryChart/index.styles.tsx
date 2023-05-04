import styled from "styled-components";
import COLORS from "../../../constants/color";
import media from "../../../styles/media";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 4rem;
  flex-direction: column;
  color: ${COLORS.GREY[600]};
  h1 {
    font-weight: 700;
    font-size: 2rem;
    width: 100%;
  }
  h4 {
    font-size: 1.7rem;
    font-weight: 700;
    width: 100%;
  }
  ${media.medium} {
    padding: 4rem 0;
  }
`;

export const Left = styled.div`
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  padding-top: 2rem;
`;

export const ChartWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding-top: 1rem;
  height: 20rem;
`;

export const CategoryList = styled.div`
  width: 34rem;
  height: 20rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0 2rem 0;
  ::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 0.1rem solid ${COLORS.GREY[300]};
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.45rem;
  color: ${COLORS.GREY[600]};
  button {
    font-size: 1.45rem;
    color: ${COLORS.GREY[600]};
  }
`;

export const Label = styled.div<{ color: string }>`
  ${({ color }) => `
  background-color: ${color};
  `}

  width: 1.9rem;
  height: 1.9rem;
  border-radius: 0.5rem;
  position: relative;
  p {
    width: 20rem;
    padding-left: 4rem;
    font-weight: 300;
  }
`;

export const Sum = styled.div`
  position: absolute;
  bottom: -3rem;
  right: 0;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
