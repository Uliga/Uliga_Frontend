import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "vtg9rv",
  env: {
    CYPRESS_API_HOST: Cypress.env("CYPRESS_API_HOST"),
    baseUrl: "http://localhost:3000",
    "cypress-react-selector": {
      root: "#root",
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
