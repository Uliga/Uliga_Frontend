import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import useBook from "../../../../hooks/book/useBook";
import SideBar from "../index";
import "@testing-library/jest-dom";

jest.mock("../../../../hooks/book/useBook");

const mockedUseSelectedBook = jest.fn(() => ({
  isLoading: false,
  error: null,
  data: {
    info: {
      accountBookAuthority: "USER",
      accountBookId: 1,
      accountBookName: "TEST",
      getNotification: false,
      isPrivate: true,
      relationShip: "TEST",
      avatarUrl: "YELLOW",
    },
    categories: [],
    members: [
      {
        id: 1,
        username: "TEST",
        accountBookAuthority: "ADMIN",
        avatarUrl: "YELLOW",
        email: "TEST",
      },
    ],
    numberOfMember: {
      count: 1,
    },
  },
}));

describe("<SideBar />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  jest.mock("react-router-dom", () => ({
    useNavigate: () => jest.fn(),
    useLocation: () => jest.fn(),
    useParams: () => jest.fn(),
  }));

  it("사이드바 스냅샷 테스트", () => {
    (useBook as jest.Mock).mockReturnValue({
      useSelectedBook: mockedUseSelectedBook,
    });
    const testUtils = render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <SideBar onClickSideBar={jest.fn()} />
        </Router>
      </QueryClientProvider>,
    );
    expect(testUtils).toMatchSnapshot();
  });

  it("사이드바에 모든 메뉴가 있는지 확인한다.", async () => {
    (useBook as jest.Mock).mockReturnValue({
      useSelectedBook: mockedUseSelectedBook,
    });

    const testUtils = render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <SideBar onClickSideBar={jest.fn()} />
        </Router>
      </QueryClientProvider>,
    );

    testUtils.getByText("가계부");
    testUtils.getByText("작성");
    testUtils.getByText("내역");
    testUtils.getByText("금융 일정");
    testUtils.getByText("예산");
    testUtils.getByText("분석");
    testUtils.getByText("주간별 · 월별 분석");
    testUtils.getByText("카테고리별 분석");
    testUtils.getByText("청약 · 대출 · 보험");
    testUtils.getByText("설정");
    testUtils.getByText("로그아웃");
  });
});
