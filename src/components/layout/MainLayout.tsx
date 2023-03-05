import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

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
`;

export default function MainLayout() {
  return (
    <Full>
      <Header />
      <Inner>
        <SideBar />
        <Outlet />
      </Inner>
    </Full>
  );
}
