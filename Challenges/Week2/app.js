//create function
function checkInput(input) {
//control and return statements
	return (input == 'Hello');
}

//Prompt user for input and store variable
var userInput = prompt("Say 'Hello' to me!");
//Call function
while ( !checkInput(userInput) ) {
	alert('Sorry, that is the wrong word :(');
	userInput = prompt("Say 'Hello' to me!");
}
//Alert user results
alert('Hello, World!');