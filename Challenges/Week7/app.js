//See readme for challenge instructions

//Task 1: Set up github.js as a module that exports function getRepos() and include and use it in app.js
var repos = require("./github.js");

// Task 3: Pull in the username for whom the program will pull repos from a command line argument
var users = process.argv.slice(2);
users.forEach(repos.getRepos);