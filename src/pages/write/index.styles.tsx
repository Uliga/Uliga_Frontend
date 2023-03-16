import styled from "styled-components";
import Button from "../../components/Button";
import COLORS from "../../constants/color";
import Input from "../../components/Input";
import IconButton from "../../components/IconButton";

const TopWrapper = styled.div`
  display: flex;
  max-width: 96rem;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 140rem;
  display: flex;
  color: ${COLORS.GREY[600]};
  gap: 1.5rem;
  padding: 4rem;
  flex-direction: column;
  h3 {
    font-weight: 700;
    font-size: 2rem;
    padding: 2rem 0 1rem 0;
  }
`;

const HouseHoldStyledButton = styled(Button)`
  border-radius: 30rem;
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  border: 1px solid ${COLORS.BLUE};
  color: ${COLORS.BLUE};
  &:hover {
    color: ${COLORS.BLUE};
  }
  background: transparent; /* 스크롤바의 색상 */
`;

const MiddleWrapper = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0.7rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: ${COLORS.MEDIUM_BLUE}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.GREY[100]}; /*스크롤바 뒷 배경 색상*/
  }
  overflow-x: hidden;
`;

const Menu = styled.div`
  gap: 1.7rem;
  display: flex;
`;
const Menu1 = styled.div`
  width: 11rem;
  font-size: 1.45rem;
  text-align: left;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: left;
  gap: 1.7rem;
  border-radius: 0.5rem;

  input {
    outline: none;
    border: none;
    padding: 1rem 0 1rem 0;
    &:focus {
      outline: none;
      border: none;
    }
  }
`;
const SelectContainer = styled.select`
  font-size: 1.3rem;
  width: 11rem;
  border: none;
  padding-top: 1rem;
  border-bottom: 0.5px solid ${COLORS.GREY[300]};
  background-color: transparent;
  &:hover {
    border: none;
    border-bottom: 0.5px solid ${COLORS.GREY[300]};
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: 0.5px solid ${COLORS.GREY[300]};
  }
`;
const StyledInput = styled(Input)`
  border-radius: 0;
  outline: none;
  border-bottom: 0.5px solid ${COLORS.GREY[300]};

  &:hover {
    border: none;
    border-bottom: 0.5px solid ${COLORS.GREY[300]};
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: 0.5px solid ${COLORS.GREY[300]};
  }
  &:active {
    outline: none;
    border: none;
    border-bottom: 0.5px solid ${COLORS.GREY[300]};
  }
  input {
    font-size: 1.3rem;
  }
`;

const StyledButton = styled(IconButton)`
  gap: 1.5rem;
  color: ${COLORS.GREY[600]};
  border-radius: 10px;
  height: 4rem;
  font-size: 1.2rem;
  background-color: ${COLORS.GREY[100]};
  &:hover {
    background-color: ${COLORS.GREY[500]};
  }
`;
const BottomWrapper = styled.div``;
const StyledPlusButton = styled(IconButton)`
  border: none;
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: ${COLORS.GREY[500]};
  &:hover {
  }
`;
const UploadButton = styled(Button)`
  border: none;
  font-size: 1.5rem;
  padding: 1.4rem 0;
`;

export {
  Wrapper,
  Menu,
  Menu1,
  TopWrapper,
  MiddleWrapper,
  HouseHoldStyledButton,
  InputWrapper,
  SelectContainer,
  StyledInput,
  StyledButton,
  BottomWrapper,
  StyledPlusButton,
  UploadButton,
};