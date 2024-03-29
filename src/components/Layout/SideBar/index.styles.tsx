import styled from "styled-components";
import IconButton from "../../IconButton";
import Button from "../../Button";
import COLORS from "../../../constants/color";
import media from "../../../styles/media";

const Container = styled.div`
  width: 17rem;
  height: 100%;
  background-color: white;
  align-items: center;
  border-left: 0.1rem solid ${COLORS.GREY[200]};
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  position: fixed;
  z-index: 100;
  transition: transform 0.2s ease-in-out;
  ${media.medium} {
    margin-left: -2rem;
    z-index: 999;
  }
`;

const Top = styled.button`
  width: 100%;
  height: 6.5rem;
  background-color: white;
  align-items: center;
  display: flex;
  padding-left: 2rem;
  border: none;
  cursor: pointer;
  gap: 1rem;
  text-align: start;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
`;
const Middle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 2rem 0 2rem 2rem;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
`;
const Bottom = styled.div`
  padding-top: 0.5rem;
  width: 100%;
  background-color: white;
  align-items: center;
`;

const MainMenu = styled(IconButton)<{ isActive: boolean }>`
  ${({ isActive }) => `
      color: ${isActive ? COLORS.BLUE : COLORS.GREY[600]};
  `}
  font-weight: 700;
  justify-content: left;
  font-size: 1.4rem;
  &:hover {
    color: ${COLORS.BLUE};
  }
`;
const SubMenu = styled(IconButton)<{ isActive: boolean }>`
  ${({ isActive }) => `
      color: ${isActive ? COLORS.BLUE : COLORS.GREY[500]};
  `}
  width: 13rem;
  font-size: 1.25rem;
  padding-top: 1rem;
  justify-content: space-between;
  &:hover {
    color: ${COLORS.BLUE};
  }
`;

const BottomButton = styled(Button)<{ isActive: boolean }>`
  ${({ isActive }) => `
      color: ${isActive ? COLORS.BLUE : COLORS.GREY[600]};
  `}
  padding: 1.5rem 0 0 2rem;
  font-size: 1.3rem;
  background-color: transparent;
  &:hover {
    color: ${COLORS.BLUE};
    background-color: transparent;
  }
`;

const BookName = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[600]};
`;

const BookInfo = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[400]};
`;
export {
  Container,
  Top,
  Middle,
  Wrapper,
  Bottom,
  MainMenu,
  SubMenu,
  BottomButton,
  BookName,
  BookInfo,
};
