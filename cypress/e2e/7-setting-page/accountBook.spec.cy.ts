import API from "../../../src/api/config";

describe("accountBook setting page e2e test", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(
        `http://localhost:3000/setting/book/${localStorage.getItem(
          "privateAccountBookId",
        )}`,
      );
      cy.intercept("PATCH", `${API.ACCOUNT_BOOK}/53`, {
        statusCode: 200,
      }).as("editPrivateAccountBook");
      cy.intercept("PATCH", `${API.ACCOUNT_BOOK}/2402`, {
        statusCode: 200,
      }).as("editSharedAccountBook");
    });
  });
  it("가계부 정보를 수정한다.", () => {
    cy.get('[data-cy="dot-button"]').eq(0).click();
    cy.contains("수정하기").click();
    cy.get('[data-cy="book-setting-container"]')
      .eq(0)
      .within(() => {
        cy.get('input[type="text"]').eq(0).clear();
        cy.get('input[type="text"]').eq(0).type("관계 테스트");
        cy.get('input[type="text"]').eq(1).type("새로운 카테고리 테스트");
        cy.get('[data-cy="add-category-button"]').click();
        cy.get('[data-cy="avatar-color"]').eq(3).click();
        cy.get('[data-cy="edit-submit-button"]').click();
        cy.wait("@editPrivateAccountBook");
      });
  });
  it("현재 존재하는 카테고리를 삭제한다.", () => {
    cy.get('[data-cy="dot-button"]').eq(0).click();
    cy.contains("수정하기").click();
    cy.get('[data-cy="book-setting-container"]')
      .eq(0)
      .within(() => {
        cy.get('[data-cy="default-category"]').eq(0).find("button").click();
      });
    cy.contains("확인").click();
    cy.get('[data-cy="edit-submit-button"]').eq(0).click();
    cy.wait("@editPrivateAccountBook");
  });
  it("기존 가계부에서 새로운 사용자를 추가한다.", () => {
    cy.get('[data-cy="dot-button"]').eq(1).click();
    cy.contains("수정하기").click();

    cy.get('[data-cy="book-setting-container"]')
      .eq(1)
      .within(() => {
        cy.get('input[type="email"]').type("ham9893@naver.com");
        cy.get('[data-cy="edit-submit-button"]').eq(0).click();
        cy.wait("@editSharedAccountBook");
      });
  });
});
