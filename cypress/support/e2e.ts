// Import commands.js using ES2015 syntax:
import "./commands";
import "mochawesome/addContext";
import "cypress-react-selector";

export {};
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}

Cypress.on("test:after:run", test => {
  let videoName = Cypress.spec.name;
  videoName = videoName.replace("/.js.*", ".js");
  const videoUrl = `videos/${videoName}.mp4`;

  addContext({ test }, videoUrl);
});
