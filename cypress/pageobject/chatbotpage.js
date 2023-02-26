class ChatBotPage{


    clickOnChatbot(){
        cy.get('div[id="sntch_button"]').should('be.visible');
        cy.get('div[id="sntch_button"]').click();
    }

    isWabChatWindowVisible(){
        return cy.get('div[id="sntch_webchat"]').should('be.visible');
    }


}

export default ChatBotPage