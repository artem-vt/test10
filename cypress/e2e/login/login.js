import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`I open the {string}`, (url) => {
  cy.visit(url);
})

When(`I input {string} into the {string} field`, (input, field)=>{
  cy.get(`[data-test=${field}]`).type(input);
})

When(`I click Sign In button`, (buttonName)=>{
  cy.intercept('https://staging-api.logistic.expert/v1/employee/session').as('sessionData');
  cy.get(`[data-test="sign_in_button"`).click();
  cy.wait('@sessionData');
})

Then(`I see I am logged in`, (url)=>{
  cy.get('@sessionData').its('response.statusCode').should('eq', 201);
})

Then(`I see I am NOT logged in`, (url)=>{
  cy.get('@sessionData').its('response.statusCode').should('eq', 401);
})

Then(`the url is {string}`, (url)=>{
  setTimeout(cy.url().should('eq', url),3000);
})

Then(`I see Invalid Credentials error message`, ()=>{
  cy.get(`[data-test="error_p"`).should("exist");
})
