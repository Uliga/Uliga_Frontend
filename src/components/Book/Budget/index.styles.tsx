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

  width: 50%;
  hr {
    margin-top: 5rem;
    width: 93%;
  }
  h5 {
    margin-left: 2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin-left: 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
`;
const InfoBox = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Info = styled.div`
  margin-left: 2rem;
  display: flex;
  div {
    display: flex;
    gap: 10rem;
  }
  p {
    width: 10rem;
  }
`;
const Right = styled.div`
  margin-top: 2.5rem;
  position: relative;
  width: 50%;
  background-color: #f9f9f9;
  border-radius: 1rem;
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  h3 {
    margin-bottom: 2.5rem;
    font-weight: bold;
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
  margin-left: 2rem;
  margin-top: 2rem;
  display: flex;
  p {
    margin-left: 30rem;
    font-weight: 200;
    font-size: 1rem;
  }
`;
const NoBudget = styled.div`
  margin-left: 2rem;
  margin-top: 5rem;
  p {
    font-weight: 200;
    font-size: 1.4rem;
  }
  height: 11rem;
`;
const CheckLastMonthBottom = styled.div`
  margin-top: 0.8rem;
  margin-left: 2rem;
  margin-bottom: 3rem;
  h3 {
    margin-top: 1.3rem;
  }
`;

const Progress = styled.div<{ color: string }>`
  margin-left: 2rem;
  width: 90%;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${props => props.color};
  position: relative;
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
  font-size: 1rem;
  right: ${props => (props.dealt < 90 ? "1" : "0")};
`;
const GageIndex = styled.div`
  margin-top: 1rem;
  position: absolute;
  margin-right: 3.7rem;
  right: 0;
  font-size: 1rem;
`;
const BudgetContainer = styled.div`
  width: 90%;
  position: relative;
  h2 {
    margin-top: 3rem;
    font-weight: 500;
  }
  p {
    margin-top: 1rem;
    font-size: 1.3rem;
    color: ${COLORS.GREY[400]};
  }
`;
const CreateButton = styled(Button)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.4rem;
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 9rem;
  margin-bottom: 3rem;
`;

const BudgetInput = styled(Input)`
  margin-top: 4rem;
  width: 100%;
  border-radius: 0.5rem;
`;
const LastMonthInfo = styled.div`
  background-color: ${COLORS.LIGHT_BLUE};
  border-radius: 0.5rem;
  margin-top: 2rem;
  padding: 0 1.2rem 1.2rem 1.2rem;
  position: absolute;
  right: 0;
  div {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 1rem;

    //color: ${COLORS.BLUE};
  }
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
};
