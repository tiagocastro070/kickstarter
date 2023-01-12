# Kickstarter

Kickstarter is meant to be a project that allows you to quickly bootstrap your project without the hassle of configuring all the tools needed to create a great app.

```
git clone git@github.com:tiagocastro070/kickstarter.git
cd kickstarter
npm install
npm run dev
```

## Vite JS

As a bundler tool ViteJS is the chosen one as it provides minimal configuration.

## Storybook

Storybook is a tool in which you can develop and document all of your components isolated. It is encouraged that you use this tool to develop individual components before building the containers that wrap them all. You can also provide general documentation on the business logic of your app. Run the following command to open Storybook on your browser.

```
npm run storybook
```

## Testing

To make sure all of our code is bullet-proof and make you confindent on what you are delivering, Kickstarter comes with **Vitest** and **Cypress** pre-configured. Use Cypress to visually test all of your components without needing to mock browser _apis_, and end-to-end testing. Use Vitest to unit-test your functions. The default global coverage (result of the Vitest and Cypress coverages merge) for `lines`, `functions`, `branches` and `statements` is 80%.
