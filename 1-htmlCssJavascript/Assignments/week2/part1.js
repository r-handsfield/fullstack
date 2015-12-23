/*
guessing_game.js

Code for a color guessing guessing_game
*/


// declare globals
var colors = [];
var targetColor = null;	// string color name, init to null
var myGuess = 99;		// string color name, init to num to protect boolean comparisons




// declare function do_game()
function do_game() {

	// generate color list
	colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"].sort();
	
	// generate random int [0,7)
	num = Math.floor(Math.random()*7);

	//assign random color
	targetColor = colors[num];

	alert("The targt color is " + targetColor)// @DEBUG

	// prompt for input
	do {
		 myGuess = String(prompt("I am thinking of one of these colors:\n\n" + colors.join(", ") + "\n\nWhat color am I thinking of? (case matters!)"));


	} while (myGuess != targetColor) // while guess is false
	
	
		// check user guess via fcn check_guess()

		// if guess is correct
			// show win text
			// break loop
		// else guess is false
			// repeat the prompt
	myBody=document.getElementsByTagName("body")[0];
	myBody.style.background=targetColor;

	alert("You got it! \nYour guess: " + myGuess + "\nThe color: " + targetColor);
}


// declare function check_guess(color, guess)
function check_guess() {
	// if guess == color
		// return true
	//else
		//return false
}


// declare function random_color()
function random_color() {

	// generate color list
	tmp_colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"].sort();
	
	// generate random int [0,7)
	num = Math.floor(Math.random()*7);

	tmp_color = tmp_colors[num];

	return tmp_color;
}



