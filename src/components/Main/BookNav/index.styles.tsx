import styled from "styled-components";
import Button from "../../Button";
import IconButton from "../../IconButton";

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

export { Container, CheckedButton, UnCheckedButton, ETCButton, Nav };
