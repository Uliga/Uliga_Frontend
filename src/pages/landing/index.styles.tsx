import styled from "styled-components";
import COLORS from "../../constants/color";
import Button from "../../components/Button";

export const Container = styled.div`
  width: 52rem;
  height: 60rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${COLORS.GREY[500]};
    text-align: center;
    padding-bottom: 2.5rem;
  }
  h4 {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    color: ${COLORS.GREY[400]};
    size: 1.5rem;
    text-align: center;
  }
`;

export const StyledButton = styled(Button)`
  padding: 1.7rem;
  font-size: 1.5rem;
`;
