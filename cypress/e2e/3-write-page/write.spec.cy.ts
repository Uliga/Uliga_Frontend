import API from "../../../src/api/config";

describe("write page e2e test", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(
        `http://localhost:3000/write/${localStorage.getItem(
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
          method: "POST",
          url: API.UPLOAD_BOOK,
        },
        {
          record: 0,
          income: 1,
          created: [
            {
              id: 52,
              isIncome: true,
              category: "☕ 카페 · 간식",
              payment: "카드",
              year: 2023,
              month: 5,
              day: 22,
              account: "거래처 테스트",
              value: 3000,
              memo: "메모 테스트",
            },
          ],
        },
      ).as("uploadBook");
    });
  });

  it("가계부에 1개의 수입 내역을 작성한다.", () => {
    cy.get('[data-cy="write-input-container"]').within(() => {
      cy.get("select").eq(0).select(2);
      cy.get('input[type="date"]').type("2023-05-22");
      cy.get("select").eq(1).select(2);
      cy.get("select").eq(2).select(2);
      cy.get('input[type="text"]').eq(0).type("거래처 테스트");
      cy.get('input[type="number"]').type("3000");
      cy.get('input[type="text"]').eq(1).type("메모 테스트");
    });
    cy.get('[data-cy="write-submit-button"]').click();
    cy.wait("@uploadBook");
  });

  it("가계부에 지출 내역을 작성하고 동일한 내용을 공유가계부에 추가한다.", () => {
    cy.get('[data-cy="add-otherBook-button"]').click();
    cy.get('[data-cy="other-account-book"]').find("button").click();
    cy.get('[data-cy="modal-submit-button"]').click();
    cy.get('[data-cy="write-input-container"]').within(() => {
      cy.get("select").eq(0).select(2);
      cy.get('input[type="date"]').type("2023-05-22");
      cy.get("select").eq(1).select(2);
      cy.get("select").eq(2).select(2);
      cy.get('input[type="text"]').eq(0).type("거래처 테스트");
      cy.get('input[type="number"]').type("3000");
      cy.get('input[type="text"]').eq(1).type("메모 테스트");
    });
    cy.get('[data-cy="write-submit-button"]').click();
    cy.wait("@uploadBook");
  });

  it("가계부에 2개 이상의 내역을 작성한다.", () => {
    cy.get('[data-cy="write-plus-button"]').click();
  });

  // it("가계부 내역 작성 시 빈 칸이 있어 가계부 작성에 실패한다.", () => {});
});
