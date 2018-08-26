//declaring the variables

var words = ["amaryllis", "anemone", "jasmine", "lavender", "lily", "tulip"];
//var startGuesses = 10;
//var wrongGuesses = [];
//var rightGuesses = [];
//var leftGuesses = 0;
var userInput = [];
var userGuess = document.getElementsByClassName("guess");
var remainingLetters;
var msg = document.getElementsByClassName("rightp");

//getting a random number --> choose var and then display array[], inside the array write math.floor and then type (inside here type math.
//random() to get the random number then multiply that * with the lenghth of the array. )
var letter = words[Math.floor(Math.random()* words.length)];

// setting the lengtth of the random word equal to "_" .

for (var i = 0; i < letter.length; i++) {
    userInput[i] = "_";
    
}

// checking the remaining letters. 
remainingLetters = letter.length;

while (remainingLetters > 0) {
    /*msg = userInput. join(" ");  */             alert(answerArray.join(" "));

    if (userGuess === null) {
        break;
        } else if (userGuess.length !== 1) {
        msg = ("Please enter a single letter.");
       } else {
        // Update the game state with the guess

        for (var j = 0; j < letter.length; j++) {
            if (letter[j] === userGuess) {
            userInput[j] = guess;
            remainingLetters--;
            }


        }
    
    }

}
