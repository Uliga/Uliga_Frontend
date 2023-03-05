import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";

const Full = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
  background-color: white;
`;

const Inner = styled.div`
  width: 140.8rem;
  height: 100vh;
  padding-top: 5.5rem;
`;

export default function DefaultLayout() {
  return (
    <Full>
      <Inner>
        <Outlet />
      </Inner>
    </Full>
  );
}
