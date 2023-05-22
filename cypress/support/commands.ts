import API from "../../src/api/config";

Cypress.Commands.add("login", () => {
  cy.request({
    url: `${Cypress.env("CYPRESS_API_HOST")}${API.LOGIN}`,
    method: "POST",
    body: {
      email: `${Cypress.env("CYPRESS_TEST_EMAIL")}`,
      password: `${Cypress.env("CYPRESS_TEST_PASSWORD")}`,
    },
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
