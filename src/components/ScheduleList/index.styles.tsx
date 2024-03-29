import styled from "styled-components";
import COLORS from "../../constants/color";
import Badge from "../Badge";
import media from "../../styles/media";

export const Container = styled.div`
  top: 0;
  width: 27rem;
  height: 45rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  h5 {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 700;
    padding-bottom: 2rem;
    color: ${COLORS.GREY[600]};
  }
  position: relative;
  ${media.medium} {
    height: 47rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 28rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  button {
    padding: 1rem;
    font-size: 1.4rem;
    position: absolute;
    bottom: 0;
  }
`;
export const ScheduleWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  line-height: 1.4;
  h6 {
    font-size: 1.4rem;
  }
  p {
    font-size: 1.1rem;
    color: ${COLORS.GREY[400]};
  }
`;
export const ScheduleInfoDesk = styled.div`
  width: 23rem;
  position: absolute;
  bottom: 2rem;
  background-color: ${COLORS.GREY[100]};
  border-radius: 0.5rem;
  padding: 1rem;
  line-height: 1.5;
  div {
    font-size: 1.1rem;
    display: flex;
    gap: 1rem;
    padding-right: 1rem;
    justify-content: right;
  }
`;

export const StyledBadge = styled(Badge)`
  border-radius: 0.5rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  justify-content: center;
  font-weight: 300;
  width: 5rem;
`;
export const dot = styled.span<{ color: string }>`
  ${({ color }) => `
  color: ${color};
  `}
  position: absolute;
  left: 7rem;
  font-size: 1rem;
  ${media.medium} {
    left: 5rem;
  }
`;
