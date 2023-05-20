import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    CYPRESS_API_HOST: process.env.REACT_APP_BASE_URL,
    baseUrl: "https://localhost:3000",
    "cypress-react-selector": {
      root: "#root",
    },
  },
  e2e: {
    baseUrl: "https://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
