const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message:
        "Please describe your project in detail. Include why you created the application, what the application does, what technologies were used, and any challenges you encountered during development.",
      name: "description",
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Be specific so that any user can get your application running.",
      name: "installation",
    },
    {
      type: "input",
      message:
        "What are the instructions for using this application? Again, be as specific as possible.",
      name: "usage",
    },
    {
      type: "checkbox",
      message:
        "Did you utilize any of the following to accomplish your project?",
      choices: [
        "collaborator(s)",
        "third-party assets requiring attribution",
        "tutorials",
        "no",
      ],
      name: "credits",
    },
    {
      type: "input",
      message:
        "Please click on the following link to choose a license: (https://choosealicense.com/). Once you know what you need, type your license(s) here:",
      name: "license",
    },
    {
      type: "input",
      message:
        "Optional: Add guidelines for how to contribute to the project. Visit (https://www.contributor-covenant.org/) for inspiration. Press enter for none.",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "Optional: If you have tests for your application, give users examples of how to run them here. Press enter for none.",
      name: "tests",
    },
  ])
  .then(function (userInput) {
    console.log(userInput);
  });
