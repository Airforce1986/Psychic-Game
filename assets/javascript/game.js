//USE CAR GAME SOLVED TO FIGURE THESE OUT
//Global is just variables defined at the top level 
//Scopped variables are variables that take precedent over global when it is called
//This is a global variables 
//These are items inside of the array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(alphabet)

//These are global variables 
var wins = 0
var losses = 0
var guessesLeft = 9
var guessedLetters = []
var letterToGuess = null

//User gets 9 tries at this 
function updateGuessesLeft() {
  // Here we are grabbing the HTML element with the querySelector and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML) after "Guesses left is added to Var guesses left which is -- (subtraction of 1 unless the user hits the computer generated number)"
  document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

// This. keyword refers to the object that you are currently in.
function updateLetterToGuess() {
  //We set letter to null so the game starts with nothing.
  //Math.random() - This is a function, there are always parentheses in case we are passing through a parameter
  //Math.floor() - This is a function, it is rounding down the number  
  letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
};
function updateGuessesSoFar() {
  //Here we take the guesses the user has tried -- then display it as letters separated by commas.
  //The + sign concatenates "Your Guesses so far: and variable guessedLetters" 
  //document.querySelector is a javascript function, needs a parameter ("#let"), tells javascript to communicate to the whole page and pair it the HTML id to communicate whatever follows the equals 
  //.join is a javascript function that lets you determine how the items are seperated
  document.querySelector("#let").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

function reset() {
  // totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

//document.onkeyup is a javascript function that reads the entire html page and executes a function back in the JS file after the =
//by adding the parameter (event) it gives a way to access the data 
document.onkeyup = function(event) {
  //declared this 9 in the global, this simply subtracts from the global variable - current value
  guessesLeft--;
  //this variable is not declared global because we only need it in this function
  //how to capture keystroke from user input - String.fromCharCode(event.keyCode) - .keyCode is a javascript identifier that understands what key was pressed. 
  //.toLowerCase means to simply change the letter pressed to lower case in case they have cap lock on
  //variable inside of a function 
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//This is an array function - .push is going to put the guess into the parameter user guess
//.push is the only way you can add value to array once you have defined
guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

  // This is a conditional statement
        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
    // This is the logic around losing - user guesses 
            }else if(guessesLeft === 0){ 
                losses++;
                document.querySelector('#losses').innerHTML = "Losses: " + losses;
                alert("Sorry, you're not psychic, maybe try again?");
            // Resetting. 
                reset();
            }
};