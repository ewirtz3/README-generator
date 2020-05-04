const inquirer = require("inquirer");

const userInput = inquirer.prompt([
  {
    type: input,
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: input,
    message:
      "Please describe your project in detail. Include why you created the application, what the application does, what technologies were used, and any challenges you encountered during development.",
    name: "description",
  },
  {
    type: input,
    message:
      "What are the steps required to install your project? Be specific so that any user can get your application running.",
    name: "installation",
  },
  {
    type: input,
    message:
      "What are the instructions for using this application? Again, be as specific as possible.",
    name: "usage",
  },
  {
    type: input,
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: input,
    message:
      "If you had any collaborators for this project, please list their GitHub usernames.",
    name: "credits",
  },
  {
    type: input,
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: input,
    message: "What is your GitHub username?",
    name: "username",
  },
]);
