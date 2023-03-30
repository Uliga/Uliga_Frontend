import styled from "styled-components";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import COLORS from "../../../constants/color";

const Container = styled.div`
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
export { Container, CreateButton, BudgetInput, LastMonthInfo };
