import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    apiHost: process.env.REACT_APP_BASE_URL,
    baseUrl: "http://localhost:3000",
    "cypress-react-selector": {
      root: "#root",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
