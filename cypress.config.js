const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: "userone@test.com",
    password: "12345",
  },
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://coe-webstore.tdlbox.com", // Add your base URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
