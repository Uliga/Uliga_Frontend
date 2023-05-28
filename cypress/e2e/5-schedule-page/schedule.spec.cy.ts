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
  });
  it("금융 일정을 추가한다.", () => {
    cy.wait(2000);

    cy.get('input[type="number"]').eq(0).type("5");
    cy.get('[data-cy="radio-label"]').eq(1).click();
    cy.get('input[type="text"]').type("일정 테스트");

    cy.get('[data-cy="schedule-add-button"]').click();
    cy.get('[data-cy="schedule-submit-button"]').click();
    cy.wait("@addSchedule");
  });

  it("추가된 금융 일정을 수정한다.", () => {});
});
