const { defineConfig } = require("cypress");

const setupNodeEvents = (on, config) => {
	require("@cypress/code-coverage/task")(on, config);
	// tell Cypress to use .babelrc file
	// and instrument the specs files
	// only the extra application files will be instrumented
	// not the spec files themselves
	on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
	// It's IMPORTANT to return the config object
	// with any changed environment variables
	return config;
}

const config = defineConfig({
  
  e2e: {
    setupNodeEvents,
  },

  component: {
    setupNodeEvents,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});


module.exports = config