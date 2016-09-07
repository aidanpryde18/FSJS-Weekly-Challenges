function checkInput( input ) {
	if (input.toLowerCase() === 'hello') {
		return 'Hello World!';
	} else {
		return 'Incorrect Input :(';
	}
}

var userInput = prompt('Say "Hello" to Me!');

alert( checkInput(userInput) );