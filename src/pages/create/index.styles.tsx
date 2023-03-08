import styled from "styled-components";
import Button from "../../components/common/Button";
import COLORS from "../../constants/color";

const Container = styled.div`
  width: 42rem;
  height: 55rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${COLORS.GREY[600]};
  h2 {
    width: 100%;
    font-weight: 700;
    text-align: start;
  }
`;

const Wrapper = styled.div`
  height: 36rem;
  margin-top: 3rem;
  h5 {
    color: ${COLORS.GREY[400]};
    font-weight: 700;
    padding-bottom: 1rem;
  }
  input {
    padding: 1.3rem;
  }
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CreateButton = styled(Button)`
  padding: 1.5rem 2rem;
  font-size: 1.4rem;
  bottom: 3rem;
  position: absolute;
`;

const AddButton = styled(Button)`
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1.4rem 3.2rem;
  font-size: 1.4rem;
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  div {
    padding-bottom: 1rem;
  }
`;

const ETCWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Required = styled.div`
  position: absolute;
  top: 0;
  left: 6.4rem;
  color: ${COLORS.RED.LIGHT};
`;

export {
  Container,
  Wrapper,
  CreateButton,
  AddButton,
  InputWrapper,
  ETCWrapper,
  Required,
};
