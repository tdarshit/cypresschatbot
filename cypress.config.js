const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  
  env:{
      url: 'https://snatchbot.me/',
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/tests/*.js'
  },

  chromeWebSecurity: false, 
  defaultCommandTimeout: 60000
});
