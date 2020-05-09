const inquirer = require("inquirer");
const fs = require("fs");

const askUser = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is the name of your project/application?",
        name: "projectName",
      },
      {
        type: "input",
        message:
          "Please describe your project in detail. Include why you created the application, what the application does, what technologies were used, and any challenges you encountered during development.",
        name: "description",
      },
      {
        type: "input",
        message: "What is your application URL?",
        name: "URL",
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
        type: "input",
        message:
          "For any collaborators, please include their GitHub username here:",
        name: "collaborators",
      },
      {
        type: "input",
        message:
          "For any third-party assets used that require attribution, please list the creator(s) and links to their online presence here:",
        name: "thirdParties",
      },
      {
        type: "input",
        message: "For any tutorials used, please include links here:",
        name: "tutorials",
      },
      {
        type: "input",
        message:
          "Please visit the following link to choose a license: (https://choosealicense.com/). Once you know what you need, type your license(s) here:",
        name: "license",
      },
      {
        type: "input",
        message:
          "Optional: Add guidelines for how to contribute to the project. Visit (https://www.contributor-covenant.org/) for inspiration.",
        name: "contributing",
      },
      {
        type: "input",
        message:
          "Optional: If you have tests for your application, give users examples of how to run them here.",
        name: "tests",
      },
    ])
    .then(function (userInput) {
      console.log(userInput);
      writeReadMe(userInput);
    })
    .catch(function (err) {
      if (err) {
        console.error(err);
        throw err;
      }
    });
};

askUser();

const createReadMe = function (userInput) {
  return `# ${userInput.projectName}

## Description
${userInput.description}
Link to project: ${userInput.URL}

<img src="https://img.shields.io/github/last-commit/${userInput.username}/${userInput.projectName}?style=for-the-badge"/>

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## Credits
Collaborators' GitHub Usernames: ${userInput.collaborators}

Third-Party Assets Used: ${userInput.thirdParties}

Tutorials Used: ${userInput.tutorials}

## License
${userInput.license}

## Contributors
${userInput.contributing}

## Tests
${userInput.tests}

If you have any questions, please contact me at GitHub username ${userInput.username}`;
};

const writeReadMe = function (userInput) {
  fs.writeFile("README.md", createReadMe(userInput), function (err) {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log("README created!");
  });
  console.log("this works");
};
