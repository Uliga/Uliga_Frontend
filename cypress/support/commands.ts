import API from "../../src/api/config";

Cypress.Commands.add("login", () => {
  cy.request({
    url: `${Cypress.env("CYPRESS_API_HOST")}${API.LOGIN}`,
    method: "POST",
    body: { email: "dbscogus4467@naver.com", password: "rhdqngkwk7!" },
  })
    .its("body")
    .then(data => {
      localStorage.setItem(
        "privateAccountBookId",
        `${data.memberInfo.privateAccountBookId}`,
      );
      localStorage.setItem("accessToken", `${data.tokenInfo.accessToken}`);
      localStorage.setItem("created", "true");
    });
});
