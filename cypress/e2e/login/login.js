import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`I open the {string}`, (url) => {
  cy.visit(url);
})

When(`I input {string} into the {string} field`, (input, field)=>{
  cy.get(`[data-test=${field}]`).type(input);
})

When(`I click {string}`, (buttonName)=>{
  cy.get(`[data-test=${buttonName}`).click();
})

Then(`the url is {string}`, (url)=>{
  setTimeout(cy.url().should('eq', url),5000);
})

