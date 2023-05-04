import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import media from "../../styles/media";
import COLORS from "../../constants/color";

const Full = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
  background-color: white;

  ${media.xlarge} {
    background-color: white;
  }
`;

const Inner = styled.div`
  width: 92%;
  max-width: 140.8rem;
  padding-top: 5.5rem;
  background-color: white;
  height: 100vh;
  position: relative;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: ${COLORS.MEDIUM_BLUE}; /* 스크롤바의 색상 */
    border-radius: 2px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.GREY[100]}; /*스크롤바 뒷 배경 색상*/
  }
  ${media.medium} {
    max-width: 123.8rem;
  }
`;

const Container = styled.div`
  width: 123.8rem;
  display: flex;
  justify-content: center;
  position: absolute; /* 수정 */
  flex-wrap: nowrap;
  left: 17rem;
  ${media.medium} {
    left: 0;
  }
`;
export default function MainLayout() {
  const [showSideBar, setShowSideBar] = useState(true);
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleOutletClick = () => {
    if (
      window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches
    ) {
      setShowSideBar(false);
    }
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1024px)",
    );
    setShowSideBar(!mediaQuery.matches);
    const handler = () => setShowSideBar(!mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return (
    <Full>
      <Header
        onToggleSideBar={toggleSideBar}
        onClickSideBar={handleOutletClick}
      />
      <Inner>
        {showSideBar && <SideBar onClickSideBar={handleOutletClick} />}
        <Container onClick={handleOutletClick}>
          <Outlet />
        </Container>
      </Inner>
    </Full>
  );
}
