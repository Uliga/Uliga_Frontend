import API from "../../../src/api/config";

describe("main page e2e test", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "POST",
        url: API.UPLOAD_INCOME,
      },
      {
        accountBookId: 0,
        incomeInfo: {
          id: 0,
          value: 0,
          payment: "카드/이체/등등",
          account: "거래처",
          memo: "simple memo",
          year: 0,
          month: 0,
          day: 0,
          creator: "creatorNickname",
          avatarUrl: "string",
          category: "category",
        },
      },
    ).as("uploadIncome");
    cy.login().then(() => {
      cy.visit(
        `http://localhost:3000/main/${localStorage.getItem(
          "privateAccountBookId",
        )}`,
      );
    });
  });
  it("메인 페이지에 필수 컴포넌트들이 모두 존재한다.", () => {
    // 초기 화면에서는 개인 가계부가 체크된 버튼으로 존재한다.
    cy.get('[data-cy="bookNav-checked-button"]')
      .contains("님의 가계부")
      .should("be.visible");
    cy.get("div").contains("이번 달 지출").should("be.visible");
    cy.get("div").contains("이번 달 수입").should("be.visible");
    cy.get("button").contains("금융 일정 수정하기").should("be.visible");
  });
});
