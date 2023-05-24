import API from "../../../src/api/config";

describe("create accountbook e2e test", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(
        `http://localhost:3000/history/${localStorage.getItem(
          "privateAccountBookId",
        )}`,
      );
    });
    cy.intercept(
      {
        method: "PATCH",
        url: API.RECORD,
      },
      {
        id: 0,
        value: 0,
        payment: "카드/현금/이체 등등",
        account: "거래처",
        memo: "simple memo",
        category: "newCategory",
        date: "yyyy-mm-dd",
        type: "RECORD",
      },
    ).as("updateHistory");
    cy.intercept("DELETE", `${API.ACCOUNT_BOOK}/data`, {
      statusCode: 200,
    }).as("deleteHistory");
  });
  it("가계부 내역을 수정한다.", () => {
    cy.contains("수정하기").should("be.visible");
    cy.contains("수정하기").eq(0).click();
    cy.wait(1000);
    cy.get('[data-cy="edit-form-container"]').within(() => {
      cy.get("select").eq(0).select(1);
      cy.get('input[type="date"]').type("2023-05-22");
      cy.get("select").eq(1).select(2);
      cy.get("select").eq(2).select(2);
      cy.get('input[type="text"]').eq(0).type("거래처 수정 테스트");
      cy.get('input[type="number"]').type("3000");
      cy.get('input[type="text"]').eq(1).type("메모 수정 테스트");
    });
    cy.get('[data-cy="edit-submit-button"]').click();
    cy.wait("@updateHistory");
  });
  it("가계부 내역을 삭제한다.", () => {
    cy.contains("삭제하기").should("be.visible");
    cy.contains("삭제하기").eq(0).click();
    cy.wait("@deleteHistory").its("response.statusCode").should("eq", 200);
  });
  it("여러개의 내역을 삭제한다.", () => {
    cy.get('input[type="checkbox"]').eq(1).click();
    cy.get('input[type="checkbox"]').eq(2).click();
    cy.contains("선택한 내역 삭제하기").click();
    cy.wait("@deleteHistory").its("response.statusCode").should("eq", 200);
  });
});
