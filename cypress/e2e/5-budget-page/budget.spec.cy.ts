import API from "../../../src/api/config";

describe("budget page e2e test", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(
        `http://localhost:3000/budget/${localStorage.getItem(
          "privateAccountBookId",
        )}`,
      );
      cy.intercept(
        {
          method: "GET",
          url: API.ACCOUNT_BOOK,
        },
        { fixture: "accountBookList.json" },
      ).as("accountBookList");
      cy.intercept(
        {
          method: "GET",
          url: `${API.ACCOUNT_BOOK}/${localStorage.getItem(
            "privateAccountBookId",
          )}/${API.ASSET}/2023/4`,
        },
        {
          income: {
            value: 40000,
          },
          record: {
            value: 20000,
          },
          budget: {
            value: 400000,
          },
        },
      ).as("lastMonth");
      cy.intercept(
        {
          method: "GET",
          url: `${API.ACCOUNT_BOOK}/${localStorage.getItem(
            "privateAccountBookId",
          )}/${API.ASSET}/2023/5`,
        },
        {
          income: {
            value: 40000,
          },
          record: {
            value: 20000,
          },
          budget: {
            value: 400000,
          },
        },
      ).as("thisMonth");
    });
  });

  it("예산 설정하러 가기 버튼을 확인한다.", () => {
    cy.wait(3000);
    cy.contains("예산 설정하러 가기").click();
    cy.wait("@lastMonth");
    cy.wait("@thisMonth");
  });
  it("예산 수정하기가 잘 적용 되는지 확인한다.", () => {
    cy.contains("예산 설정하러 가기").click();
    cy.wait(3000);
    cy.wait("@lastMonth");
    cy.wait("@thisMonth");
    cy.intercept(
      {
        method: "POST",
        url: API.BUDGET,
      },
      {
        id: 0,
        year: 2023,
        month: 5,
        value: 777777,
      },
    );
    cy.contains("금액").parent().type("777777");
    cy.intercept(
      {
        method: "GET",
        url: `${API.ACCOUNT_BOOK}/${localStorage.getItem(
          "privateAccountBookId",
        )}/${API.ASSET}/2023/5`,
      },
      {
        income: {
          value: 40000,
        },
        record: {
          value: 20000,
        },
        budget: {
          value: 777777,
        },
      },
    );
    cy.contains("수정").click();
    cy.wait("@lastMonth");
  });
  it("지출 내역 확인하기 버튼을 클릭한다.", () => {
    cy.wait(3000);
    cy.contains("지출 내역 확인하기").click();
  });
  it("지출 분석 보러가기 버튼을 클릭한다.", () => {
    cy.wait(3000);
    cy.contains("지출 분석 보러가기").click();
  });
});
