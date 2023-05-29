import API from "../../../src/api/config";

describe("my page e2e test", () => {
  beforeEach(() => {
    cy.wrap(null).then(() => {
      cy.login().then(() => {
        cy.visit(
          `http://localhost:3000/setting/me/${localStorage.getItem(
            "privateAccountBookId",
          )}`,
        );
        cy.intercept(
          {
            method: "GET",
            url: API.MEMBER,
          },
          { fixture: "memberInfo.json" },
        ).as("memberInfo");
        cy.wait("@memberInfo");
      });
    });
  });
  it("이메일,이름,닉네임이 올바르게 들어가있는지 확인한다.", () => {
    cy.wait(3000);
    cy.contains("사용자 이메일")
      .siblings()
      .should("have.value", "test@email.com");
    cy.contains("사용자 이름").siblings().should("have.value", "testName");
    cy.contains("사용자 닉네임")
      .siblings()
      .should("have.attr", "placeholder", "testNickName");
  });
  it("닉네임 수정이 되는지 확인한다.", () => {
    cy.wait(3000);
    cy.contains("사용자 닉네임").siblings().type("newTestNickName");
    cy.intercept(
      {
        method: "GET",
        url: `${API.NICK_DUPLICATE}newTestNickName`,
      },
      {
        exists: false,
      },
    ).as("CheckDuplicateNickName");
    cy.intercept(
      {
        method: "PATCH",
        url: API.MEMBER,
      },
      {
        nickName: "newTestNickName",
        avatarUrl: "default",
        applicationPassword: "123456",
        password: "string",
      },
    ).as("patchMemberInfo");
    cy.contains("수정하기").click();
  });
  it("중복된 닉네임으로 수정하는 경우, 수정이 되는지 안되는지 확인한다.", () => {
    cy.wait(3000);
    cy.contains("사용자 닉네임").siblings().type("failTestNickName");
    cy.intercept(
      {
        method: "GET",
        url: `${API.NICK_DUPLICATE}failTestNickName`,
      },
      {
        exists: true,
      },
    ).as("failCheckDuplicateNickName");
    cy.contains("수정하기").click();
  });
  it("회원탈퇴가 되는지 확인한다.", () => {
    cy.wait(2000);
    cy.contains("회원 탈퇴").click();
    cy.intercept("DELETE", API.MEMBER, {
      statusCode: 200,
    }).as("deleteMember");
    cy.contains("확인").click();
    // localStorage.clear();
  });
});
