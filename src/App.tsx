import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import Button from "./components/common/Button";
import Input from "./components/common/Input";

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
        <Inner>
          <Input size={40} labelExist label="내용" />
          <br />
          <Button title="Primary" size="large" theme="primary" />
          <br />
          <Button title="Secondary" size="large" theme="secondary" />
          <br />
          <Button title="Tertiary" size="large" theme="tertiary" />
          <br />
          <Button title="Unfocus" size="large" theme="unfocus" />
          <br />
          <Button title="Disabled" size="large" disabled />
          <br />
          <Button title="Large" size="large" />
          <br />
          <Button title="Medium" size="medium" />
          <br />
          <Button title="Small" size="small" />
          <br />
        </Inner>
      </Full>
    </QueryClientProvider>
  );
}

export default App;
