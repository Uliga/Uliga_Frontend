import styled from "styled-components";
import COLORS from "../../../constants/color";
import Badge from "../../Badge";
import Button from "../../Button";
import media from "../../../styles/media";

export const Container = styled.div`
  top: 0;
  width: 32.3rem;
  height: 39rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  h5 {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 700;
    padding-bottom: 2rem;
    color: ${COLORS.GREY[600]};
  }
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
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
`;

export const EditButton = styled(Button)`
  padding: 1.2rem 6rem;
  font-size: 1.3rem;
  position: absolute;
  bottom: 0;
  margin: 2rem;
  ${media.medium} {
    padding: 1.2rem 8rem;
    font-size: 1.5rem;
  }
`;

export const Nothing = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  padding-top: 5rem;
  align-items: center;
  font-size: 1.15rem;
  color: ${COLORS.GREY[500]};
  white-space: pre-wrap;
  line-height: 1.5;
  flex-direction: column;
`;
