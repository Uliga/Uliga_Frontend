import API from "../../../src/api/config";

describe("budget page e2e test", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(
        `http://localhost:3000/budget/${localStorage.getItem(
          "privateAccountBookId",
        )}`,
      );
      cy.intercept(
        {
          method: "GET",
          url: API.ACCOUNT_BOOK,
        },
        { fixture: "accountBookList.json" },
      ).as("accountBookList");
      cy.intercept(
        {
          method: "GET",
          url: `${API.ACCOUNT_BOOK}/${localStorage.getItem(
            "privateAccountBookId",
          )}/${API.ASSET}/2023/4`,
        },
        {
          income: {
            value: 40000,
          },
          record: {
            value: 20000,
          },
          budget: {
            value: 400000,
          },
        },
      ).as("lastMonth");
      cy.intercept(
        {
          method: "GET",
          url: `${API.ACCOUNT_BOOK}/${localStorage.getItem(
            "privateAccountBookId",
          )}/${API.ASSET}/2023/5`,
        },
        {
          income: {
            value: 40000,
          },
          record: {
            value: 20000,
          },
          budget: {
            value: 400000,
          },
        },
      ).as("thisMonth");
    });
  });

  it("가계부 변경이 잘되는지 확인한다.", () => {
    cy.wait(3000);
    // cy.contains("예산 설정하기").click();
    // // cy.get('[data-cy="write-input-container"]').within(() => {
    // //   cy.get("select").eq(0).select(2);
    // //   cy.get('input[type="date"]').type("2023-05-22");
    // //   cy.get("select").eq(1).select(2);
    // //   cy.get("select").eq(2).select(2);
    // //   cy.get('input[type="text"]').eq(0).type("거래처 테스트");
    // //   cy.get('input[type="number"]').type("3000");
    // //   cy.get('input[type="text"]').eq(1).type("메모 테스트");
    // // });
    // // cy.get('[data-cy="write-submit-button"]').click();
    // cy.wait("@lastMonth");
    // cy.wait("@thisMonth");
  });
  // it("예산 설정하러가기를 클릭한다.", () => {
  //   cy.wait(3000);
  //   cy.get('[data-cy="write-input-container"]').within(() => {
  //     cy.get("select").eq(0).select(2);
  //     cy.get('input[type="date"]').type("2023-05-22");
  //     cy.get("select").eq(1).select(2);
  //     cy.get("select").eq(2).select(2);
  //     cy.get('input[type="text"]').eq(0).type("거래처 테스트");
  //     cy.get('input[type="number"]').type("3000");
  //     cy.get('input[type="text"]').eq(1).type("메모 테스트");
  //   });
  //   cy.get('[data-cy="write-submit-button"]').click();
  //   cy.wait("@uploadBook");
  // });
});
