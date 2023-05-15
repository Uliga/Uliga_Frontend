import API from "../../src/api/config";

describe("login e2e test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.intercept(
      { method: "POST", url: API.LOGIN },
      { fixture: "loginResult.json" },
    ).as("loginResult");
  });
  it("유효한 아이디와 비밀번호로 로그인에 성공한다.", () => {
    cy.contains("이메일 주소").parent().type("dbscogus4467@naver.com");
    cy.contains("비밀번호").parent().type("rhdqngkwk7!");
    cy.get("button").click();
    cy.wait(500);
    cy.wait("@loginResult").then(interception => {
      expect(interception?.response?.statusCode).to.equal(200);
    });
  });
  it("유효하지 않은 아이디와 비밀번호로 로그인에 실패한다.", () => {});
  it("아이디와 비밀번호 필드에 아무값도 입력하지 않는다.", () => {});
});
