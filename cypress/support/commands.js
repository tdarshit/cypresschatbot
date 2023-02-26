// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Enter value into input box on chatbot window
Cypress.Commands.add("enterValue", (value) =>{    
    cy.iframe('#sntch_iframe').find('input[id="chat_input"]').click().type(value+ '{enter}');
})

//Validate response message from chatbot
Cypress.Commands.add("messageValidation", (index, responseFromChatbot) =>{    
    cy.iframe('#sntch_iframe').find('div[data-test="message-text"]').eq(index).should('contain', responseFromChatbot);
})

//Click on button 
Cypress.Commands.add("clickButton", (index, buttonName) =>{    
    cy.iframe('#sntch_iframe').find('button[data-test="message-suggested-btn"]').eq(index).should('contain', buttonName);
    cy.iframe('#sntch_iframe').find('button[data-test="message-suggested-btn"]').eq(index).click();
})

//Validate message is visible on chatbot window
Cypress.Commands.add("isMessageVisible", (index) =>{    
    cy.iframe('#sntch_iframe').find('div[data-test="message-text"]').eq(index).should('be.visible');
})

