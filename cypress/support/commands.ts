import API from "../../src/api/config";

Cypress.Commands.add("login", () => {
  cy.request({
    url: `${Cypress.env("apiHost")}${API.LOGIN}`,
    method: "POST",
    body: { email: Cypress.env("email"), password: Cypress.env("password") },
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
