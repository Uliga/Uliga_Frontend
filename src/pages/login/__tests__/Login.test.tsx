import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Login from "../index";

function renderLogin() {
  const mutateLogin = jest.fn();

  const testUtils = render(
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <Login />
      </Router>
    </QueryClientProvider>,
  );

  const Email = () =>
    testUtils.getByPlaceholderText("이메일 주소를 입력해주세요.");
  const Password = () =>
    testUtils.getByPlaceholderText("비밀번호를 입력해주세요.");

  const typeEmail = (email: string) => {
    userEvent.type(Email(), email);
  };

  const typePassword = (password: string) => {
    userEvent.type(Password(), password);
  };

  const LoginButton = () =>
    testUtils.getByText("로그인", { selector: "button" });

  return {
    Email,
    Password,
    testUtils,
    mutateLogin,
    typeEmail,
    typePassword,
    LoginButton,
  };
}

describe("<Login />", () => {
  it("로그인 컴포넌트 스냅샷 테스트", () => {
    const { testUtils } = renderLogin();
    expect(testUtils.container).toMatchSnapshot();
  });
  it("로그인 컴포넌트 렌더링 테스트", () => {
    const { Email, Password, LoginButton } = renderLogin();

    expect(Email()).toBeInTheDocument();
    expect(Password()).toBeInTheDocument();
    expect(LoginButton()).toBeInTheDocument();
  });
});
