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

Then(`I see I am logged in`, (url)=>{
  cy.intercept('https://staging-api.logistic.expert/v1/employee/session').as('getSession');
  cy.wait('@getSession').its('response.statusCode').should('eq', 201);
})

Then(`the url is {string}`, (url)=>{
  setTimeout(cy.url().should('eq', url),3000);
})
