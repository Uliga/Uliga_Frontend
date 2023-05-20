// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-react-selector";

export {};
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Promise<void>;
    }
  }
}
