import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import SignupForm from "../index";

describe("회원가입 컴포넌트 테스트", () => {
  it("스냅샷 일치 확인", () => {
    const { container } = render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <SignupForm />
        </Router>
      </QueryClientProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it("인증버튼 클릭 전에는 인증번호 입력 레이블이 숨겨져 있어야 함", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <SignupForm />
        </Router>
      </QueryClientProvider>,
    );
    const labelElement = screen.getByText("이메일 주소");
    const inputElement = labelElement.nextSibling as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(inputElement.value).toBe("test@example.com");
    const codeInputLabel = screen.queryByText("인증번호 입력");
    expect(codeInputLabel).toBeNull();
  });
  it("회원가입 성공 확인", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <SignupForm />
        </Router>
      </QueryClientProvider>,
    );

    // 비밀번호 입력란에 값을 입력
    const passwordInput = screen.getByText("비밀번호");
    const passwordElement = passwordInput.nextSibling as HTMLInputElement;
    fireEvent.change(passwordElement, { target: { value: "password" } });

    // 비밀번호 확인 입력란에 값을 입력
    const passwordCheckInput = screen.getByText("비밀번호 확인");
    const passwordCheckElement =
      passwordCheckInput.nextSibling as HTMLInputElement;
    fireEvent.change(passwordCheckElement, { target: { value: "password" } });

    // 이름 입력란에 값을 입력
    const nameInput = screen.getByText("이름");
    const nameInputElement = nameInput.nextSibling as HTMLInputElement;
    fireEvent.change(nameInputElement, { target: { value: "함민혁" } });

    // 닉네임 입력란에 값을 입력
    const nicknameInput = screen.getByText("닉네임");
    const nicknameInputElement = nicknameInput.nextSibling as HTMLInputElement;
    fireEvent.change(nicknameInputElement, { target: { value: "하미녁" } });

    // 중복 확인 버튼 클릭
    const duplicateCheckButton = screen.getByText("확인");
    fireEvent.click(duplicateCheckButton);

    // 회원가입 버튼 클릭
    const signupButton = screen.getByText("계정 만들기");
    fireEvent.click(signupButton);
  });

  it("잘못된 값 들어왔을 때 처리 확인", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <SignupForm />
        </Router>
      </QueryClientProvider>,
    );

    // 비밀번호 입력란에 유효하지 않은 값을 입력
    const passwordInput = screen.getByText("비밀번호");
    const passwordElement = passwordInput.nextSibling as HTMLInputElement;
    fireEvent.change(passwordElement, { target: { value: "short" } });

    // 비밀번호 확인 입력란에 다른 값을 입력
    const passwordCheckInput = screen.getByText("비밀번호 확인");
    const passwordCheckElement =
      passwordCheckInput.nextSibling as HTMLInputElement;
    fireEvent.change(passwordCheckElement, {
      target: { value: "different-password" },
    });

    // 이름 입력란에 값을 입력하지 않음
    const nameInput = screen.getByText("이름");
    const nameInputElement = nameInput.nextSibling as HTMLInputElement;
    fireEvent.change(nameInputElement, { target: { value: "" } });

    // 닉네임 입력란에 유효하지 않은 값을 입력 (두글자 미만)
    const nicknameInput = screen.getByText("닉네임");
    const nicknameInputElement = nicknameInput.nextSibling as HTMLInputElement;
    fireEvent.change(nicknameInputElement, { target: { value: "a" } });

    // 중복 확인 버튼 클릭
    const duplicateCheckButton = screen.getByText("확인");
    fireEvent.click(duplicateCheckButton);

    // 회원가입 버튼 클릭
    const signupButton = screen.getByText("계정 만들기");
    expect(signupButton).toBeDisabled();
  });
});
