import styled from "styled-components";
import * as colors from "../../../constants/color";
import IconButton from "../../common/IconButton";
import Button from "../../common/Button";

const Container = styled.div`
  width: 17rem;
  height: 100%;
  background-color: white;
  align-items: center;
  border-left: 0.1rem solid ${colors.GREY[200]};
  border-right: 0.1rem solid ${colors.GREY[200]};
  position: fixed;
`;

const Top = styled.div`
  width: 100%;
  height: 4.6875rem;
  background-color: white;
  align-items: center;
  padding-left: 1rem;
  border-bottom: 0.1rem solid ${colors.GREY[200]};
`;
const Middle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 2rem 0 2rem 2rem;
  padding-left: 2rem;
  border-bottom: 0.1rem solid ${colors.GREY[200]};
`;
const Bottom = styled.div`
  padding-top: 0.5rem;
  width: 100%;
  background-color: white;
  align-items: center;
`;

const MainMenu = styled(IconButton)`
  font-weight: 700;
  justify-content: left;
  font-size: 1.4rem;
  &:hover {
    color: ${colors.BLUE};
  }
  color: ${colors.GREY[600]};
`;
const SubMenu = styled(IconButton)`
  width: 13rem;
  font-size: 1.25rem;
  padding-top: 1rem;
  justify-content: space-between;
  &:hover {
    color: ${colors.BLUE};
  }
  color: ${colors.GREY[500]};
`;

const BottomButton = styled(Button)`
  padding: 1.5rem 0 0 2rem;
  font-size: 1.3rem;
  background-color: transparent;
  color: ${colors.GREY[600]};
  &:hover {
    color: ${colors.BLUE};
    background-color: transparent;
  }
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
};