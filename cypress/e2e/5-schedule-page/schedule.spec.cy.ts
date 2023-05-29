import API from "../../../src/api/config";

describe("schedule page e2e test", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(
        `http://localhost:3000/schedule/${localStorage.getItem(
          "privateAccountBookId",
        )}`,
      );
    });
    cy.intercept("POST", API.ADD_SCHEDULE, {
      statusCode: 200,
    }).as("addSchedule");
    cy.intercept("GET", `${API.ACCOUNT_BOOK}/52${API.SCHEDULE}`, {
      schedules: [
        {
          info: {
            id: 0,
            notificationDay: 3,
            name: "금융 일정 이름",
            isIncome: true,
            value: 0,
            creatorId: 0,
            creator: "creatorUsername",
            accountBookName: "accountBookName",
          },
          assignments: [
            {
              id: 0,
              username: "string",
              value: 0,
            },
          ],
        },
      ],
    }).as("loadSchedule");
    cy.intercept("DELETE", `${API.SCHEDULE}/0`, {
      statusCode: 200,
    }).as("deleteSchedule");
  });
  it("금융 일정을 추가한다.", () => {
    cy.wait(2000);
    cy.get('input[type="number"]').eq(0).type("5");
    cy.get('[data-cy="radio-label"]').eq(1).click();
    cy.get('input[type="text"]').type("일정 테스트");
    cy.get('input[type="number"]').eq(1).clear();
    cy.get('input[type="number"]').eq(1).type("100000");
    cy.get('[data-cy="schedule-add-button"]').click();
    cy.get('[data-cy="current-add-schedule"]')
      .should("contain.text", "일정 테스트")
      .and("contain.text", "개인 금융 일정")
      .and("contain.text", "매달 5일")
      .and("contain.text", "100,000원")
      .and("have.length", 1);

    cy.get('[data-cy="schedule-submit-button"]').click();
    cy.wait("@addSchedule");
  });
  it("금융 일정을 수정한다.", () => {
    cy.contains("금융 일정 수정").click();
    cy.get('[data-cy="current-user-schedule"]')
      .eq(0)
      .within(() => {
        cy.get('[data-cy="schedule-box"]').eq(0).click();
      });
    cy.get('input[type="number"]').eq(0).clear();
    cy.get('input[type="number"]').eq(1).clear();
    cy.get('input[type="text"]').clear();

    cy.get('input[type="number"]').eq(0).type("10");
    cy.get('[data-cy="record-radio-label"]').click();
    cy.get('input[type="text"]').type("새로운 일정");
    cy.get('input[type="number"]').eq(1).type("500");
    cy.intercept("PATCH", API.SCHEDULE, {
      statusCode: 200,
    }).as("updateSchedule");

    cy.contains("수정 완료").click();
    cy.wait("@updateSchedule");
  });
  it("금융 일정을 삭제한다.", () => {
    cy.contains("금융 일정 수정").click();
    cy.get('[data-cy="current-user-schedule"]')
      .eq(0)
      .within(() => {
        cy.contains("삭제하기").click();
      });
    cy.intercept("GET", `${API.ACCOUNT_BOOK}/52${API.SCHEDULE}`, {
      schedules: [],
    });
    cy.contains("확인").click();
    cy.wait("@deleteSchedule");
  });
});
