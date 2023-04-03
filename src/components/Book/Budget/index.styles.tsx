import styled from "styled-components";
import COLORS from "../../../constants/color";
import Button from "../../Button";
import Input from "../../Input";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  padding: 4rem;
  flex-direction: column;
  color: ${COLORS.GREY[600]};
  h1 {
    font-weight: 700;
    font-size: 2rem;
  }
  h4 {
    padding-top: 0.7rem;
    font-size: 1.4rem;
    color: ${COLORS.GREY[400]};
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const BudgetBox = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;
const Left = styled.div`
  position: relative;
  width: 55rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    font-weight: bold;
    font-size: 2.1rem;
  }
  h5 {
    font-size: 1.5rem;
  }
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 0;
  margin-top: 1rem;
  border-top: 0.1rem solid ${COLORS.GREY[200]};
  span {
    font-weight: 700;
  }
`;
const Info = styled.div`
  display: flex;
  div {
    display: flex;
    gap: 4rem;
  }

  p {
    width: 10rem;
  }
`;
const Right = styled.div`
  position: relative;
  background-color: #f9f9f9;
  border-radius: 1rem;
  height: 27rem;
  padding: 0rem 3rem;
  width: 57rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 1rem;
  }
  h3 {
    font-weight: bold;
    font-size: 2.1rem;
  }
  h5 {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

const dot = styled.span<{ color: string }>`
  ${({ color }) => `
  color: ${color};
  `}
  font-size: 1rem;
  margin-top: 0.3rem;
  margin-right: 1rem;
`;
const CheckLastMonth = styled.div`
  display: flex;
  p {
    font-weight: 200;
    font-size: 1rem;
  }
`;
const NoBudget = styled.div`
  margin-left: 1rem;
  margin-top: 5rem;
  p {
    font-weight: 300;
    font-size: 1.4rem;
  }
  height: 11rem;
  color: ${COLORS.BLUE};
`;
const CheckLastMonthBottom = styled.div``;

const Progress = styled.div<{ color: string }>`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${props => props.color};
  position: relative;
  margin: 3rem 0;
  border: 0.1rem solid #e4e4e4;
`;
const NowPercent = styled.div<{ dealt: number; color: string }>`
  background-color: ${props => props.color};
  width: ${props => `${props.dealt}%`};
  border-top-right-radius: ${props => (props.dealt < 100 ? "0" : "0.5rem")};
  border-bottom-right-radius: ${props => (props.dealt < 100 ? "0" : "0.5rem")};
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  margin-bottom: 1rem;
  p {
    font-size: 1rem;
    margin-left: ${props => `${props.dealt * 0.5}rem`};
    padding-top: 3rem;
  }
  height: 100%;
`;
const GageBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  font-size: 1rem;
`;
const BarIndex = styled.div<{ dealt: number }>`
  margin-left: ${props => (props.dealt < 90 ? `${props.dealt}%` : "0")};
  position: absolute;
  font-size: 1.2rem;
  color: ${COLORS.GREY[400]};
  right: ${props => (props.dealt < 90 ? "1" : "0")};
`;
const GageIndex = styled.div`
  position: absolute;
  font-size: 1.2rem;
  right: 0;
  color: ${COLORS.GREY[400]};
`;
const BudgetContainer = styled.div`
  width: 41.2rem;
  position: relative;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    font-weight: 700;
    font-size: 2.3rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1.3rem;
    color: ${COLORS.GREY[400]};
  }
`;
const CreateButton = styled(Button)`
  font-size: 1.4rem;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.3rem 0;
  font-weight: 700;
  margin-top: 7rem;
`;

const BudgetInput = styled(Input)`
  margin-top: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  input {
    padding-right: 3rem;
  }
`;
const LastMonthInfo = styled.div`
  background-color: ${COLORS.LIGHT_BLUE};
  border-radius: 0.5rem;
  padding: 0 1.2rem 1.2rem 1.2rem;
  width: 14rem;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  top: 20.2rem;
  div {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 1rem;
  }
`;

const Won = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1rem;
  font-size: 1.4rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RecordButton = styled.button`
  background-color: transparent;
  color: ${COLORS.GREY[400]};
  border: none;
  font-size: 1.2rem;
  span {
    font-weight: 700;
  }
  cursor: pointer;
`;

export {
  Container,
  Wrapper,
  BudgetBox,
  Left,
  Right,
  dot,
  CheckLastMonth,
  CheckLastMonthBottom,
  Progress,
  NowPercent,
  Info,
  InfoBox,
  GageIndex,
  BarIndex,
  GageBox,
  NoBudget,
  BudgetContainer,
  LastMonthInfo,
  BudgetInput,
  CreateButton,
  Won,
  InputWrapper,
  ButtonWrapper,
  RecordButton,
};
