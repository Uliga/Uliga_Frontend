// Import commands.js using ES2015 syntax:
import "./commands";

export {};
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}
