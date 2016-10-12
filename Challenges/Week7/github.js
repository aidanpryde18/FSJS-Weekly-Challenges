//See readme for challenge instructions

/*
 * Note about github api: requires User-Agent header to be set. This can be done
 * in Node by passing an options object (rather than a simple url string) as the 
 * first param to the https.get() function
 *
 * So something like
 * var options = {
 *   hostname: api.github.com,
 *   path: <<try to find in documentation linked in readme>>,
 *   headers: {
 *     'User-Agent': '<<your github username>>'
 *   }
 * };
 *
 */

//Task 1: Set up github.js as a module that exports function getRepos() and include and use it in app.js

var exports = module.exports = {};
var https = require("https");
var http = require("http");

function printRepos(name) {
    console.log(name);
}

//Task 2: Program getRepos() function to get the public repos from a github username and write a list of the repo names to the console
function getRepos(username){
    var options = {
        hostname: 'api.github.com',
        path: "https://api.github.com/users/" + username + "/repos",
        headers: {
          'User-Agent': 'aidanpryde18'
        }
    };
    var request = https.get(options, function (response) {
        var body = "";

        response.on('data', function (chunk) {
            body += chunk;
        }); // Response Data Callback

        response.on('uncaughtException', function (err) {
            console.log(err);
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                try {
                    var profile = JSON.parse(body);
                    console.log('Repos for ' + username);
                    console.log("");

                    profile.forEach(function (repo) {
                        var name = repo.name;
                        printRepos(name);
                    }); //End ForEach Loop
                    console.log("");
                } catch (error) {
                    //Parse Error
                    printError(error);
                }
            } else {
                //Status Code Error
                printError({message: "There was an error getting the profile for: " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"})
            }
        }); // End Response End Callback

    }); //Request Callback

}

function printError(error) {
    console.error(error.message);
}

module.exports.getRepos = getRepos;