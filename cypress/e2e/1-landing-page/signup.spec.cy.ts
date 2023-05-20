import API from "../../../src/api/config";

export {};

describe("회원가입", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
    cy.contains("이메일").parent().type("testuser@example.com");
    cy.intercept(
      {
        method: "GET",
        url: `${API.CHECK_EMAIL}testuser@example.com`,
      },
      { exists: false },
    );
    cy.contains("이메일로 계속하기").click();
  });
  const verificationCode = "000001";
  const password = "alsgur9893@";
  const name = "함민혁";
  const nickname = "james";
  it("회원가입 성공", () => {
    cy.intercept(
      {
        method: "POST",
        url: API.EMAIL_SEND,
      },
      {
        email: "test@email.com",
        success: true,
      },
    );
    cy.contains("인증").click();
    cy.contains("인증번호 입력").parent().type(verificationCode);
    cy.intercept(
      {
        method: "POST",
        url: API.CODE,
      },
      {
        matches: true,
      },
    );
    cy.contains("인증 완료").click();
    cy.contains("비밀번호").parent().type(password);
    cy.contains("비밀번호 확인").parent().type(password);
    cy.contains("이름").parent().type(name);
    cy.contains("닉네임").parent().type(nickname);

    cy.intercept(
      {
        method: "GET",
        url: `${API.NICK_DUPLICATE}${nickname}`,
      },
      {
        exists: false,
      },
    );
    cy.contains("닉네임") // '닉네임 확인' 라벨을 포함한 요소 선택
      .parent()
      .parent() // 다음 형제 요소 선택 (오른쪽에 위치한 요소)
      .contains("확인") // '확인' 버튼을 포함한 요소 선택
      .click();
    cy.get('input[type="checkbox"]').click();
    cy.intercept(
      {
        method: "POST",
        url: `${API.SIGNUP}`,
      },
      {
        email: "testuser@example.com",
        password,
        nickName: nickname,
        userName: name,
        applicationPassword: "1234",
      },
    );
    cy.contains("계정 만들기").click(); // '확인' 버튼을 포함한 요소 선택
  });

  it("닉네임 중복으로 회원가입 실패", () => {
    cy.intercept(
      {
        method: "POST",
        url: API.EMAIL_SEND,
      },
      {
        email: "test@email.com",
        success: true,
      },
    );
    cy.contains("인증").click();
    cy.contains("인증번호 입력").parent().type(verificationCode);

    cy.intercept(
      {
        method: "POST",
        url: API.CODE,
      },
      {
        matches: true,
      },
    );
    cy.contains("인증 완료").click();
    cy.contains("비밀번호").parent().type(password);
    cy.contains("비밀번호 확인").parent().type(password);
    cy.contains("이름").parent().type(name);
    cy.contains("닉네임").parent().type(nickname);

    cy.intercept(
      {
        method: "GET",
        url: `${API.NICK_DUPLICATE}${nickname}`,
      },
      {
        exists: true,
      },
    );
    cy.contains("닉네임") // '닉네임 확인' 라벨을 포함한 요소 선택
      .parent()
      .parent() // 다음 형제 요소 선택 (오른쪽에 위치한 요소)
      .contains("확인") // '확인' 버튼을 포함한 요소 선택
      .click();
    cy.get('input[type="checkbox"]').click();
    cy.intercept(
      {
        method: "POST",
        url: `${API.SIGNUP}`,
      },
      {
        email: "testuser@example.com",
        password,
        nickName: nickname,
        userName: name,
        applicationPassword: "1234",
      },
    );
    cy.contains("계정 만들기").should("be.disabled");
  });
  it("인증번호 불일치로 회원가입 실패", () => {
    cy.intercept(
      {
        method: "POST",
        url: API.EMAIL_SEND,
      },
      {
        email: "test@email.com",
        success: true,
      },
    );
    cy.contains("인증").click();
    cy.contains("인증번호 입력").parent().type(verificationCode);
    cy.intercept(
      {
        method: "POST",
        url: API.CODE,
      },
      {
        matches: false,
      },
    );
    cy.contains("인증 완료").click();
    cy.contains("인증 완료").should("not.be.disabled");
    cy.contains("비밀번호").parent().type(password);
    cy.contains("비밀번호 확인").parent().type(password);
    cy.contains("이름").parent().type(name);
    cy.contains("닉네임").parent().type(nickname);
    cy.intercept(
      {
        method: "GET",
        url: `${API.NICK_DUPLICATE}${nickname}`,
      },
      {
        exists: false,
      },
    );
    cy.contains("닉네임") // '닉네임 확인' 라벨을 포함한 요소 선택
      .parent()
      .parent() // 다음 형제 요소 선택 (오른쪽에 위치한 요소)
      .contains("확인") // '확인' 버튼을 포함한 요소 선택
      .click();
    cy.get('input[type="checkbox"]').click();
    cy.intercept(
      {
        method: "POST",
        url: `${API.SIGNUP}`,
      },
      {
        email: "testuser@example.com",
        password,
        nickName: nickname,
        userName: name,
        applicationPassword: "1234",
      },
    );
    cy.contains("계정 만들기").should("be.disabled");
  });
  it("비밀번호 확인 실패로 회원가입 실패", () => {
    const fakePassword = "alsgur9893";
    cy.intercept(
      {
        method: "POST",
        url: API.EMAIL_SEND,
      },
      {
        email: "test@email.com",
        success: true,
      },
    );
    cy.contains("인증").click();
    cy.contains("인증번호 입력").parent().type(verificationCode);

    cy.intercept(
      {
        method: "POST",
        url: API.CODE,
      },
      {
        matches: true,
      },
    );
    cy.contains("인증 완료").click();
    cy.contains("인증 완료").should("not.be.disabled");
    cy.contains("비밀번호").parent().type(password);
    cy.contains("비밀번호 확인").parent().type(fakePassword);
    cy.contains("이름").parent().type(name);
    cy.contains("닉네임").parent().type(nickname);
    cy.intercept(
      {
        method: "GET",
        url: `${API.NICK_DUPLICATE}${nickname}`,
      },
      {
        exists: false,
      },
    );
    cy.contains("닉네임") // '닉네임 확인' 라벨을 포함한 요소 선택
      .parent()
      .parent() // 다음 형제 요소 선택 (오른쪽에 위치한 요소)
      .contains("확인") // '확인' 버튼을 포함한 요소 선택
      .click();
    cy.get('input[type="checkbox"]').click();
    cy.intercept(
      {
        method: "POST",
        url: `${API.SIGNUP}`,
      },
      {
        email: "testuser@example.com",
        password,
        nickName: nickname,
        userName: name,
        applicationPassword: "1234",
      },
    );
    cy.contains("계정 만들기").should("be.disabled");
  });
});
