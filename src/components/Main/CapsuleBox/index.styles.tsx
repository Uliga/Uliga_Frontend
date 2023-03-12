import styled from "styled-components";
import COLORS from "../../../constants/color";
import IconButton from "../../IconButton";

const Container = styled.div`
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem 2rem 0 2rem;
  display: flex;
  gap: 1rem;
  width: 40rem;
  position: relative;
  flex-direction: column;
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  &:last-child {
    border: none;
  }
`;

const Title = styled.div`
  color: ${COLORS.GREY[500]};
  font-size: 1.4rem;
  font-weight: 300;
`;

const Subtitle = styled.div`
  white-space: pre-wrap;
  font-size: 1.2rem;
  color: ${COLORS.GREY[400]};
  font-weight: 300;
`;

const Amount = styled.div`
  color: ${COLORS.GREY[600]};
  font-weight: 700;
  font-size: 1.8rem;
`;

const StyledButton = styled(IconButton)<{ color: string }>`
  ${({ color }) => `
    color: ${color};
    &:hover{
    color: ${color === COLORS.BLUE ? COLORS.DARK_BLUE : COLORS.DARK_YELLOW};
  }
`}
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 1.5rem;
  font-size: 1.2rem;
  &:hover {
    background-color: white;
  }
`;

export { Container, Wrapper, Title, Subtitle, Amount, StyledButton };
