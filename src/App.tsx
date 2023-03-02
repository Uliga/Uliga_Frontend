import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import IconButton from "./components/common/IconButton";
import * as colors from "./constants/color";
import Icon from "./components/common/Icon";
import Header from "./components/main/Header";
import Person from "./assets/person";
import SideBar from "./components/main/SideBar";

const queryClient = new QueryClient();

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Full>
        <Header />
        <Inner>
          <SideBar />
          <Person />
        </Inner>
      </Full>
    </QueryClientProvider>
  );
}

export default App;
