const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 7000,
    watchForFileChanges: false,
    "baseUrl":'https://pushing-front.vercel.app/',
    "scripts":{
      "test": "npx cypress open --e2e -b chrome"
    },

  },
  
});
