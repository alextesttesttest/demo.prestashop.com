const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    testIsolation: false,
  },
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
});
