import styled, { keyframes } from "styled-components";
import COLORS from "../../constants/color";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 52rem;
  gap: 3rem;
  height: 60rem;
  font-size: 1.2rem;
  overflow: scroll;
  border-radius: 0.5rem;
  ::-webkit-scrollbar {
    width: 0.7rem; /* 스크롤바의 너비 */
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: ${COLORS.GREY[200]}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.GREY[100]}; /*스크롤바 뒷 배경 색상*/
  }
  overflow-x: hidden;
`;

const Container = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 46.5rem;
  position: relative;
  gap: 3rem;
`;
const LogoWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 700;
  font-size: 1.6rem;
  color: ${COLORS.BLUE};
  background-color: white;
  border: none;
  cursor: pointer;
  span {
    margin-top: 0.2rem;
    font-family: GmarketSans;
  }
`;

const PartTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 1rem;
`;
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const CodeContainer = styled.p`
  display: flex;
  flex-direction: row;
  position: relative;
  opacity: 0;
  gap: 1rem;
  &.show-text {
    opacity: 1;
    animation: ${fadeInDown} 1s forwards;
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.GREY[600]};
  padding: 0 0 0.5rem 0;
`;
const PartTitle = styled.div`
  font-size: 1.2rem;
  padding-top: 0.2rem;
  color: ${COLORS.GREY[400]};
`;
const CertificationStyledButton = styled(Button)`
  margin-top: 2.6rem;
  font-size: 1.4rem;
  height: 4.7rem;
  border-radius: 0.7rem;
  width: 7.32rem;
`;
const CodeStyledButton = styled(Button)`
  margin-top: 2.6rem;
  font-size: 1.4rem;
  height: 4.7rem;
  border-radius: 0.7rem;
  width: 11.32rem;
`;
const SignUpStyledButton = styled(Button)`
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

const PersonalDiv = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[400]};
  display: flex;
  position: relative;
  gap: 0.7rem;
`;

const PersonalInfo = styled.div`
  margin-left: 2rem;
  font-size: 1.3rem;
  color: ${COLORS.GREY[400]};
  display: flex;
  position: relative;
  gap: 0.7rem;
`;

const StyledCheckBox = styled(Input)`
  zoom: 1.2;
  margin-top: -1rem;
  margin-right: 0.5rem;
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
  color: ${COLORS.MEDIUM_BLUE};
`;

export {
  Wrapper,
  Container,
  LogoWrapper,
  Title,
  CertificationStyledButton,
  SignUpStyledButton,
  Buttons,
  PersonalDiv,
  Signup,
  Warn,
  PartTitle,
  PartTitleContainer,
  InputContainer,
  PersonalInfo,
  StyledCheckBox,
  CodeStyledButton,
  CodeContainer,
};
