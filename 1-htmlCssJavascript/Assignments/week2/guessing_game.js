/*
guessing_game.js

Code for a color guessing guessing_game
*/


// declare globals
var color = null;	// string color name, init to null
var guess = 99;		// string color name, init to num to protect boolean comparisons




// declare function run_game()
function run_game() {

	// generate random color via the function `random_color()`
	color = random_color();
	color = 'red' //@DEBUG

	// prompt for input
	do {
		guess = String(prompt("I am thinking of one of these colors: \n red, orange, yellow, green, blue, indigo, violet \n\nWhat color am I thinking of? (case matters!)"));


	} while (color != guess) // while guess is false
	
	
		// check user guess via fcn check_guess()

		// if guess is correct
			// show win text
			// break loop
		// else guess is false
			// repeat the prompt
	myBody=document.getElementsByTagName("body")[0];
	myBody.style.background=color;

	alert("You got it! \nYour guess: " + guess + "\nThe color: " + color);
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



