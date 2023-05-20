import API from "../../../src/api/config";

describe("create accountbook e2e test", () => {
  beforeEach(() => {
    // cy.intercept(
    //   {
    //     method: "GET",
    //     url: `${API.CHECK_EMAIL}dbscogus44@gmail.com`,
    //   },
    //   { exists: true },
    // ).as("checkEmail");
    // cy.intercept(
    //   {
    //     method: "POST",
    //     url: `${API.ACCOUNT_BOOK}`,
    //   },
    //   {
    //     id: 0,
    //     name: "accountBookName",
    //     isPrivate: true,
    //     relationShip: "relationship",
    //   },
    // ).as("createAccountBook");
    cy.login().then(() => {
      cy.visit(
        `https://localhost:3000/main/${localStorage.getItem(
          "privateAccountBookId",
        )}`,
      );
    });
  });
  it("가계부 생성 버튼이 뜨는지 확인한다.", () => {
    cy.get('[data-cy="create-book-button"]').should("be.visible");
  });
  it("새로운 가계부를 생성하는 기능이 잘 작동하는지 확인한다.", () => {
    cy.get('[data-cy="create-book-button"]').click();
    cy.get('[data-cy="create-modal-container"]').within(() => {
      cy.contains("가계부 이름").parent().type("가계부 이름 테스트");
      cy.contains("가계부 조직").parent().type("가계부 조직 테스트");
      cy.contains("사용자 초대").parent().type("dbscogus44@gmail.com");
      cy.contains("사용자 초대").parent().parent().find("button").click();
      // cy.wait("@checkEmail");
      cy.get('[data-cy="email-container"]').should(
        "contain",
        "dbscogus44@gmail.com",
      );
      cy.contains("카테고리 추가").parent().type("추가된 카테고리");
      cy.contains("카테고리 추가").parent().parent().find("button").click();
      cy.get('[data-cy="category-container"]').should(
        "contain",
        "추가된 카테고리",
      );
      cy.contains("공유 가계부 만들기").click();
      // cy.wait("@createAccountBook");
    });
  });
});
