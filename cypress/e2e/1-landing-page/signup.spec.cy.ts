import API from "../../../src/api/config";

export {};

describe("회원가입", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.contains("이메일").parent().type("testuser@example.com");
    // cy.intercept({ method: "POST", url: API.CHECK_EMAIL }, req => {
    //   req.body = {
    //     email: "testuser@example.com",
    //   };
    //   // 요청을 진행하기 위해 응답을 반환
    //   req.continue();
    // });
    cy.intercept(
      {
        method: "GET",
        url: `${API.CHECK_EMAIL}testuser@example.com`,
      },
      { exists: false },
    );
    cy.contains("이메일로 계속하기").click();
  });

  it("회원가입 시나리오", () => {
    const verificationCode = "000001";
    const password = "alsgur9893@";
    const name = "함민혁";
    const nickname = "james";
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
    // 이메일로 전송된 인증번호 6자리 입력
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
    // 비밀번호 입력
    cy.contains("비밀번호").parent().type(password);
    // 비밀번호 확인 입력
    cy.contains("비밀번호 확인").parent().type(password);
    // 이름 입력
    cy.contains("이름").parent().type(name);
    // 닉네임 입력
    cy.contains("닉네임").parent().type(nickname);
    let result;
    cy.fixture("nicknameResult").then(data => {
      const isNicknameAvailable = (nick: string) => {
        // fixture 데이터와 닉네임 비교
        const exists = data.nickName.includes(nick);
        return { exists };
      };
      result = isNicknameAvailable(nickname);
    });
    cy.intercept(
      {
        method: "GET",
        url: `${API.NICK_DUPLICATE}${nickname}`,
      },
      {
        exists: result,
      },
    );
    cy.contains("닉네임") // '닉네임 확인' 라벨을 포함한 요소 선택
      .parent()
      .parent() // 다음 형제 요소 선택 (오른쪽에 위치한 요소)
      .contains("확인") // '확인' 버튼을 포함한 요소 선택
      .click();
    // cy.contains("우리가 개인정보").next(); // '확인' 버튼을 포함한 요소 선택
    // cy.get('input[type="checkbox"]').click();
    // cy.contains("우리가 개인정보").check(); // '확인' 버튼을 포함한 요소 선택
    cy.get('input[type="input"]');
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
});
