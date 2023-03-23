import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import COLORS from "../../constants/color";

const Full = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
`;

const Inner = styled.div`
  width: 140.8rem;
  padding-top: 5.5rem;
  background-color: white;
  height: 100vh;
  border-right: 0.1rem solid ${COLORS.GREY[200]};
`;

const Container = styled.div`
  width: 123.8rem;
  left: 17rem;
  display: flex;
  justify-content: center;
  position: relative;
`;

export default function MainLayout() {
  return (
    <Full>
      <Header />
      <Inner>
        <SideBar />
        <Container>
          <Outlet />
        </Container>
      </Inner>
    </Full>
  );
}
