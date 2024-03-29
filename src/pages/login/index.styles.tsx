import styled from "styled-components";
import COLORS from "../../constants/color";
import Button from "../../components/Button";
import media from "../../styles/media";
import IconButton from "../../components/IconButton";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 46.5rem;
  height: 45.5rem;
  position: relative;
  gap: 4rem;
  padding-top: 2rem;
  input {
    ${media.medium} {
      font-size: 1.5rem;
    }
  }
`;
const LogoWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 700;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: ${COLORS.BLUE};
  span {
    margin-top: 0.2rem;
    font-family: GmarketSans;
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.GREY[600]};
  padding: 0 0 1.4rem 0;
`;

const StyledButton = styled(Button)`
  font-size: 1.4rem;
  padding: 1.4rem 1rem;
  border-radius: 0.7rem;
  position: absolute;
  right: 0;
  bottom: 0;
  ${media.medium} {
    font-size: 1.5rem;
  }
`;

const PasswordResetButton = styled(IconButton)`
  font-size: 1.3rem;
  position: absolute;
  right: 0;
  bottom: -4rem;
`;

export { Container, LogoWrapper, Title, StyledButton, PasswordResetButton };
