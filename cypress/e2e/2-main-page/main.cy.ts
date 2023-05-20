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
        `https://localhost:3000/main/${localStorage.getItem(
          "privateAccountBookId",
        )}`,
      );
      cy.intercept(
        {
          method: "GET",
          url: `/accountBook/${localStorage.getItem(
            "privateAccountBookId",
          )}/item/${new Date().getFullYear()}/${
            new Date().getMonth() + 1
          }/${new Date().getDate()}`,
        },
        {
          items: [
            {
              id: 0,
              value: 0,
              payment: "카드/이체/등등",
              account: "거래처",
              memo: "simple memo",
              year: 0,
              month: 0,
              day: 0,
              type: "RECORD",
              creator: "creatorNickname",
              category: "category",
              avatarUrl: "string",
            },
          ],
        },
      ).as("loadDayHistory");
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

  it("캘린더에서 해당 날짜의 가계부 작성 버튼을 누르면 일일 가계부 작성이 가능하다.", () => {
    // 오늘 날짜로 선택
    cy.get(`[data-cy="calendar-day-${new Date().getDate()}"]`).trigger(
      "mouseover",
    );
    cy.get(`[data-cy="calendar-day-${new Date().getDate()}"]`)
      .find('[data-cy="write-day-button"]')
      .click();
    cy.get('[data-cy ="value-input-conatiner"]').find("input").type("3000");
    cy.get('[data-cy="bottom-sheet-wrapper"]')
      .find("label")
      .contains("수입")
      .click();
    // 필수 입력 조건이 완성된 상태가 아니므로 submit button은 disabled 상태여야함
    cy.get('[data-cy="day-write-submit-button"]').should("be.disabled");
    cy.get('[data-cy="bottom-sheet-input-container"]')
      .find("select")
      .eq(0) // 선택한 인덱스의 컴포넌트를 찾습니다.
      .select(3);
    cy.get('[data-cy="bottom-sheet-input-container"]')
      .find("select")
      .eq(1) // 선택한 인덱스의 컴포넌트를 찾습니다.
      .select(2);
    cy.get('[data-cy="bottom-sheet-wrapper"]')
      .find("div")
      .contains("거래처")
      .parent()
      .find("input")
      .parent()
      .type("거래처 테스트");
    cy.get('[data-cy="bottom-sheet-wrapper"]')
      .find("div")
      .contains("메모")
      .parent()
      .find("input")
      .parent()
      .type("메모 테스트");
    // 필수 입력 조건이 완성되었으므로 submit button은 enabled 상태여야함
    cy.get('[data-cy="day-write-submit-button"]').should("be.enabled");
    cy.get('[data-cy="day-write-submit-button"]').click();
    cy.wait("@uploadIncome");
  });

  it("금융 일정 수정하기 버튼을 누르면 금융 일정 페이지로 이동한다.", () => {
    cy.get("button").contains("금융 일정 수정하기").click();
    cy.location("pathname", { timeout: 5000 }).should(
      "include",
      `schedule/${localStorage.getItem("privateAccountBookId")}`,
    );
  });

  it("캘린더에서 날짜를 눌렀을 때, 해당 날짜의 가계부 내역이 표시된다.", () => {
    cy.get(`[data-cy="calendar-day-container"]`)
      .find("button.react-calendar__tile")
      .eq(new Date().getDate() - 1)
      .click();
    cy.wait("@loadDayHistory");
    cy.get("div").contains(
      `${new Date().getMonth() + 1}월 ${new Date().getDate()}일 가계부 내역`,
    );
  });
});
