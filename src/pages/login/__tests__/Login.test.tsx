import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
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

  const onClickLoginButton = () => {
    userEvent.click(LoginButton());
    const email = (Email() as HTMLInputElement).value;
    const password = (Password() as HTMLInputElement).value;
    mutateLogin({ email, password });
  };

  return {
    Email,
    Password,
    testUtils,
    mutateLogin,
    typeEmail,
    typePassword,
    LoginButton,
    onClickLoginButton,
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
  it("유저 로그인 정보로 mutateLogin 함수를 호출한다.", async () => {
    const {
      Email,
      Password,
      typeEmail,
      typePassword,
      onClickLoginButton,
      mutateLogin,
    } = renderLogin();

    typeEmail("dbscogus4467@naver.com");
    typePassword("test123!");
    onClickLoginButton();

    // 이메일과 비밀번호 필드의 값이 예상한 값과 일치하는지를 검증
    expect(Email()).toContainHTML("dbscogus4467@naver.com");
    expect(Password()).toContainHTML("test123!");
    expect(mutateLogin).toHaveBeenCalledWith({
      email: "dbscogus4467@naver.com",
      password: "test123!",
    });
  });
});
