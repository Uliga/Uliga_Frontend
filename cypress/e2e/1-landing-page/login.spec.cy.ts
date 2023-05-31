import API from "../../../src/api/config";

describe("login e2e test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.contains("이메일")
      .parent()
      .type(`${Cypress.env("CYPRESS_TEST_EMAIL")}`);
    cy.contains("이메일로 계속하기").click();
  });
  it("유효한 아이디와 비밀번호로 로그인에 성공한다.", () => {
    cy.intercept(
      { method: "POST", url: `${API.LOGIN}` },
      { fixture: "loginResult.json" },
    ).as("loginSuccess");

    cy.contains("비밀번호")
      .parent()
      .type(`${Cypress.env("CYPRESS_TEST_PASSWORD")}`);
    cy.get("[data-cy='login-submit-button']").click();

    cy.wait("@loginSuccess")
      .its("response.body")
      .then(data => {
        expect(data.memberInfo.privateAccountBookId).to.equal(53);
        cy.location("pathname", { timeout: 5000 }).should(
          "include",
          `main/${data.memberInfo.privateAccountBookId}`,
        );
      });
  });
  it("유효하지 않은 아이디와 비밀번호로 로그인에 실패한다.", () => {
    cy.intercept(
      { method: "POST", url: `${API.LOGIN}` },
      { statusCode: 401, body: { error: "Login failed" } },
    ).as("loginFailure");
    cy.contains("이메일 주소")
      .parent()
      .type(`${Cypress.env("CYPRESS_TEST_EMAIL")}`);
    cy.contains("비밀번호").parent().type("wrong password");
    cy.get("[data-cy='login-submit-button']").click();

    cy.wait("@loginFailure").then(interception => {
      expect(interception?.response?.statusCode).to.equal(401);
    });
  });
  it("아이디와 비밀번호 필드에 올바르지 않은 값을 입력하여 버튼이 disabled 상태가 된다.", () => {
    cy.contains("이메일 주소").parent().type("dbscogus4467navercom");
    cy.get("button").should("be.disabled");
  });
});
