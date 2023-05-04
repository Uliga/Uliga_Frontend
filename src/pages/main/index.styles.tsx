import styled from "styled-components";
import Button from "../../components/Button";
import media from "../../styles/media";

export const Container = styled.div`
  width: 100%;
  gap: 2rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.medium} {
    padding: 4rem 0;
  }
`;

export const WriteButton = styled(Button)`
  font-size: 1.4rem;
  position: absolute;
  right: 4rem;
  padding: 1.2rem 2.5rem;
  ${media.medium} {
    right: 0;
  }
`;

export const Bottom = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;
