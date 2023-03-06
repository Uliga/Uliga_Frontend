import styled from "styled-components";
import COLORS from "../../constants/color";
import Button from "../../components/common/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 46.5rem;
  position: relative;
  gap: 4rem;
  padding-top: 2rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 700;
  font-size: 1.6rem;
  color: ${COLORS.BLUE};
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.GREY[600]};
  padding: 0 0 1.4rem 0;
`;

const StyledButton = styled(Button)`
  font-size: 1.4rem;
  padding: 1.2rem 1rem;
  border-radius: 0.7rem;
  position: absolute;
  top: 0;
  right: 0;
`;

const Buttons = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[400]};
  padding-bottom: 7rem;
  display: flex;
  position: relative;
`;

const Signup = styled.button`
  font-size: 1.3rem;
  color: ${COLORS.GREY[400]};
  cursor: pointer;
  padding-left: 1rem;
  border: none;
  background-color: transparent;
  text-decoration: underline;
`;

const Warn = styled.p`
  font-size: 1.1rem;
  padding-top: 1rem;
  color: ${COLORS.BLUE};
`;

export { Container, LogoWrapper, Title, StyledButton, Buttons, Signup, Warn };
