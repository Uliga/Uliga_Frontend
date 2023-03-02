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
  padding-top: 8rem;
  background-color: white;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Full>
        <Header />

        <Inner>
          <Person />
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
          <IconButton
            title="가계부"
            theme="normal"
            iconName="book"
            widthSize={6.0625}
            heightSize={1.7}
            iconSize="1.1rem"
          />
          <br />
          <IconButton
            title="구성원 추가하기"
            theme="primary"
            iconName="personGear"
          />
          <br />
          <IconButton
            title="구성원 추가하기"
            theme="secondary"
            iconName="personGear"
          />
          <br />
          <IconButton
            title="윤채현님의 가계부"
            theme="tertiary"
            iconName="checkFill"
          />
          <br />
          <Icon iconName="checkFill" color={colors.BLUE} />
        </Inner>
      </Full>
    </QueryClientProvider>
  );
}

export default App;
