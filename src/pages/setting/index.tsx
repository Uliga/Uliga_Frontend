import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SettingNav from "../../components/Book/Setting/nav";
import COLORS from "../../constants/color";
import media from "../../styles/media";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  color: ${COLORS.GREY[600]};
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  ${media.medium} {
    padding: 4rem 0;
  }
`;

export default function Setting() {
  return (
    <Container>
      <SettingNav />
      <Outlet />
    </Container>
  );
}
