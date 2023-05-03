import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import media from "../../styles/media";

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
  width: 91%;
  max-width: 140.8rem;
  padding-top: 5.5rem;
  background-color: white;
  height: 100vh;
  ${media.medium} {
    width: 123.8rem;
  }
`;

const Container = styled.div`
  width: 123.8rem;
  overflow-x: scroll;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
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
      <Header onToggleSideBar={toggleSideBar} />
      <Inner onClick={handleOutletClick}>
        {showSideBar && (
          <>
            <SideBar />
            <Container onClick={handleOutletClick}>
              <Outlet />
            </Container>
          </>
        )}
        {!showSideBar && (
          <Container onClick={handleOutletClick}>
            <Outlet />
          </Container>
        )}
      </Inner>
    </Full>
  );
}
