var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");
var fs = require("fs");

// Require all npm packages and files

const questions = [
  // questions to user using "inquirer"
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username"
  },

  {
    type: "input",
    message: "What is your project Title?",
    name: "title",
    default: "Generate a README.md file "
  },

  {
    type: "input",
    message: "What is your repo called?",
    name: "repo",
    default: "GoodREADMEGenerator"
  },

  {
    type: "input",
    message: "How do you describe your Project?.",
    name: "desc",
    default:
      " This application will generate a README.md file for your current project"
  },

  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
    default: "Step1: Run npm install and Step2: Run node index.js"
  },

  {
    type: "input",
    message: "Write instructions for using your project.",
    name: "usage",
    default:
      "1.Run node index.js 2.Answers the questions 3.The README.md file will be created. "
  },

  {
    type: "input",
    message:
      "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
    name: "contributors",
    default: " Robert McKenney, Abdul Amoud and Igor Calvacante"
  },

  {
    type: "input",
    message: "Provide examples on how to run tests.",
    name: "test",
    default: "Insert your tests sample here..."
  }
];
//answers.username

function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
    axios
      .get("https://api.github.com/users/" + answers.username)
      .then(response => {
        console.log(response);
        var imageURL = response.data.avatar_url;
        answers.image = imageURL;
        console.log(imageURL);
        fs.writeFile("README.md", generateMarkdown(answers), function(err) {
          if (err) {
            throw err;
          }
        });
      });
  });
}

init();
