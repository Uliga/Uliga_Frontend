import styled from "styled-components";
import Button from "../../components/Button";

export const Container = styled.div`
  width: 100%;
  gap: 2rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WriteButton = styled(Button)`
  font-size: 1.4rem;
  position: absolute;
  right: 4rem;
  padding: 1.2rem 2.5rem;
`;

export const Bottom = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;
