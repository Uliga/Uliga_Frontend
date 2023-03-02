import React from "react";
import styled from "styled-components";
import * as colors from "../../../constants/color";
import IconButton from "../../common/IconButton";
import Button from "../../common/Button";

const Container = styled.div`
  width: 13.0625rem;
  height: 100%;
  background-color: white;
  align-items: center;
  border-left: 0.1rem solid ${colors.GREY[200]};
  border-right: 0.1rem solid ${colors.GREY[200]};
  position: fixed;
`;

const Menu1 = styled.div`
  width: 100%;
  height: 4.6875rem;
  background-color: white;
  align-items: center;
  border-bottom: 0.1rem solid ${colors.GREY[200]};
`;
const Menu2 = styled.div`
  width: 100%;
  background-color: white;
  align-items: center;
  border-bottom: 0.1rem solid ${colors.GREY[200]};
`;
const Menu2A = styled.div`
  padding-top: 0.5rem;
  width: 100%;
  background-color: white;
`;

const Menu3 = styled.div`
  width: 100%;
  height: 9.5rem;
  background-color: white;
  align-items: center;
  border-bottom: 0.1rem solid ${colors.GREY[200]};
`;
const Menu4 = styled.div`
  width: 100%;
  background-color: white;
  align-items: center;
  border-bottom: 0.1rem solid ${colors.GREY[200]};
`;
const Menu5 = styled.div`
  width: 100%;
  background-color: white;
  align-items: center;
`;

const HouseholdIconButton = styled(IconButton)`
  margin-top: 2.075rem;
  margin-bottom: 0.8rem;
  margin-left: 1rem;
  justify-content: left;
  font-size: 1.3rem;
  &:hover {
    color: ${colors.BLUE};
  }
`;
const PigIconButton = styled(IconButton)`
  margin-top: 1.4rem;
  margin-bottom: 2.075rem;
  font-size: 1.3rem;
  justify-content: left;
  margin-left: 1rem;
  &:hover {
    color: ${colors.BLUE};
  }
`;
const AnalIconButton = styled(IconButton)`
  margin-top: 2.075rem;
  margin-bottom: 0.65rem;
  margin-left: 1rem;
  font-size: 1.3rem;
  justify-content: left;
  &:hover {
    color: ${colors.BLUE};
  }
`;
const EtcServiceButton = styled(IconButton)`
  margin-top: 2.075rem;
  margin-bottom: 2.075rem;
  margin-left: 1rem;
  font-size: 1.3rem;
  justify-content: left;
  &:hover {
    color: ${colors.BLUE};
  }
`;
const Menu2aIconButton = styled(IconButton)`
  font-weight: 100;
  justify-content: space-between;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  margin-left: 1rem;
  &:hover {
    color: ${colors.BLUE};
  }
`;

const MyPageButton = styled(Button)`
  font-weight: 400;
  font-size: 1.3rem;
  margin-top: 2.075rem;
  margin-left: 0.5rem;
  background-color: transparent;
  color: BLACK;
  &:hover {
    color: ${colors.BLUE};
    background-color: transparent;
  }
`;
const LogoutButton = styled(Button)`
  font-weight: 400;
  font-size: 1.3rem;
  margin-left: 0.5rem;
  margin-top: 0.625rem;
  background-color: transparent;
  color: BLACK;
  &:hover {
    color: ${colors.BLUE};
    background-color: transparent;
  }
`;
export {
  Container,
  Menu1,
  Menu2,
  Menu2A,
  Menu3,
  Menu4,
  Menu5,
  HouseholdIconButton,
  PigIconButton,
  EtcServiceButton,
  AnalIconButton,
  Menu2aIconButton,
  MyPageButton,
  LogoutButton,
};
