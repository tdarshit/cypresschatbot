import 'cypress-iframe';
import ChatBotPage from '../pageobject/chatbotpage';'../pageobject/chatbotpage';

describe('Chatbot test scenarios', () => {

    const nameToEnter = "Dee"
    const questionToChatbot = 'Broadcast';
    const chatBotQuestion = 'Hi Dee! Good to chat to you. Did I get your name right?';
    const featuresResponse = 'SnatchBot aims to make the potential of chatbots available to all users, including the non technical ones';
    const broadCastResponse = 'And chatbots are great at this. Imagine the difference between being invited to chat (on Messenger, Viber, Telegram, etc.) and seeing an email in your inbox';

    const chatBotPage = new ChatBotPage();

    beforeEach('navigate to chatbot website and type name', function() {
        
        cy.visit(Cypress.env('url'))

        chatBotPage.clickOnChatbot();
        chatBotPage.isWabChatWindowVisible();

        //Swith to iframe present in order to interact with chatbaot
        cy.frameLoaded('#sntch_iframe');
        cy.enterValue(nameToEnter);
        cy.messageValidation(3, chatBotQuestion)
        cy.clickButton(0, 'Yes');

    })

    it('validate features response from chatbot', () => {
     
        //Validating response after clicking on 'Features' button in chatbot window
        cy.clickButton(3, 'Features')     
        cy.isMessageVisible(10)
        cy.messageValidation(10, featuresResponse)

     })

    it('validate broadcast response from chatbot', () =>{      

        //Validating response after asking question about 'Broadcast' in chatbot window
        cy.enterValue(questionToChatbot); 
        cy.isMessageVisible(10)
        cy.messageValidation(10, broadCastResponse)
   })

  })