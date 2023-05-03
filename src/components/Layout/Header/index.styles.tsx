import styled from "styled-components";
import COLORS from "../../../constants/color";
import Button from "../../Button";
import media from "../../../styles/media";
import IconButton from "../../IconButton";

export const Container = styled.div`
  width: 100%;
  height: 5.5rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 192rem;
  display: flex;
  position: relative;
  padding-left: 2rem;
  align-items: center;
`;
export const StyledIconButton = styled(IconButton)`
  cursor: pointer;
  margin-left: 4rem;
  visibility: hidden;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
  ${media.medium} {
    visibility: visible;
  }
`;

export const Title = styled.div`
  padding-top: 0.2rem;
  font-family: GmarketSans;
  color: ${COLORS.BLUE};
  font-size: 1.5rem;
`;

export const UtilWrapper = styled.div`
  position: relative;
  right: 10rem;
  width: 33rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 0.6rem 1.4rem;
    font-size: 1.3rem;
    font-weight: 300;
  }
`;
export const ModalWrapper = styled.div`
  position: relative;
  width: 5rem;
`;

export const TutorialButton = styled(Button)`
  border-radius: 10rem;
  width: 8rem;
  margin-left: 3rem;
`;

export const HomeButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
`;
