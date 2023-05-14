import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
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
});
