import styled from "styled-components";
import COLORS from "../../../constants/color";
import Badge from "../../Badge";

const Container = styled.div`
  width: 24rem;
  height: 39rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding: 2rem;
  h4 {
    font-weight: 700;
    padding-bottom: 2rem;
  }
  color: ${COLORS.GREY[600]};
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
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

const ScheduleWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  h5 {
    font-size: 1.35rem;
    color: ${COLORS.GREY[500]};
  }
`;

const StyledBadge = styled(Badge)`
  border-radius: 0.5rem;
  padding: 0.3rem 1rem;
  font-weight: 300;
`;

export { Container, Wrapper, ScheduleWrapper, StyledBadge };
