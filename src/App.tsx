import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import Button from "./components/common/Button";

const queryClient = new QueryClient();

const Full = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Inner = styled.div`
  width: 140.8rem;
  background-color: white;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Full>
        <Inner />
      </Full>
    </QueryClientProvider>
  );
}

export default App;
