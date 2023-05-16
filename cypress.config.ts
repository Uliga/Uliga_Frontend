import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    apiHost: process.env.REACT_APP_BASE_URL,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
