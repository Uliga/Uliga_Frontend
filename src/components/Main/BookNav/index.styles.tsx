import styled from "styled-components";
import Button from "../../Button";
import IconButton from "../../IconButton";
import COLORS from "../../../constants/color";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const CheckedButton = styled(IconButton)`
  border-radius: 30rem;
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
`;

const UnCheckedButton = styled(Button)`
  border-radius: 30rem;
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
`;

const ETCButton = styled(IconButton)<{}>`
  border-radius: 30rem;
  padding: 1rem 1.2rem;
`;

const Nav = styled.div`
  display: flex;
  max-width: 96rem;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
`;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: rgba(7, 42, 68, 0.2) 0px 4px 14px 0px;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 5rem;
  width: 100%;
  flex-direction: column;
  z-index: 999;
  padding-bottom: 2rem;
`;

export { Container, CheckedButton, UnCheckedButton, ETCButton, Nav, Wrapper };
