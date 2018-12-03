
//array
var words = ["soundgarden", "nirvana", "flannel", "coffee", "rain", "distortion"]

//variables
var randomWord = "";
var theLetters = [];
var blanks = 0;
var correctBlanks = [];
var wrongGuess = [];

//counter variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

// game start functions

function Game() {
// computer generates random word

randomWord = words[Math.floor(Math.random() * words.length)];

// split the word into arrays and store in a new array

theLetters = randomWord.split("");

// store length or word in blanks

blanks = theLetters.length;

// create a loop to generate "_" for each letter in array stored in blanks

for (var i = 0; i < blanks; i++) {
    correctBlanks.push("_");
}

// show the "_" in html

document.getElementById("currentword").innerHTML = " " + correctBlanks.join(" ");

//console log

console.log(randomWord);
console.log(theLetters)
console.log(blanks)
console.log(correctBlanks)

}
//reset

function reset() {
    guessesRemaining = 9
    wrongGuess = [];
    correctBlanks = []; 
    Game()
}

//check for letters

//to see if the letter selected matches random word
function checkLetters(letter) {
    var lettersInWord = false;

    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] === theLetters) {
            lettersInWord = true;
        }
    }

    if (lettersInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] === letter) {
                correctBlanks[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(correctBlanks);

}

  //see if player won

  function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...
    if (theLetters.toString() === correctBlanks.toString()) {
        wins++;
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("losstracker").innerHTML = " " + losses;
    }

    // losses display and guesses countdown
    document.getElementById("currentword").innerHTML = " " + correctBlanks.join(" ");
    document.getElementById("guessesremaining").innderHTML = " " + guessesRemaining;
    
  }

// function to start the game

Game()

// check for keyup and convert to lowercase; store in guesses

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = " " + wrongGuess.join(" ");
    
}
