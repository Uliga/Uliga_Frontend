import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SettingNav from "../../components/Book/Setting/nav";
import COLORS from "../../constants/color";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  padding: 4rem;
  flex-direction: row;
  justify-content: space-between;
  color: ${COLORS.GREY[600]};
`;

export default function Setting() {
  return (
    <Container>
      <SettingNav />
      <Outlet />
    </Container>
  );
}
