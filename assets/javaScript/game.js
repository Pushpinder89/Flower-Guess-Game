//declaring the variables

var guesses = 10;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedltr = [];
var wordArray = [];
var words = ["AMARYLLIS", "ANEMONE", "JASMINE", "LAVENDER", "LILY", "TULIP"];
var word = words[Math.floor(Math.random() * words.length)];
var letterArray = word.split("");

// go through the word and replace the letters with "_"
for (var i = 0; i < word.length; i++) {
    wordArray[i] = "_";
}

//join the wordArray
wgsd.innerHTML = wordArray.join(" ");
// check the work
console.log(wordArray);
console.log(word);

// create a function to check the win 
function checkWin() {
    if (letterArray.toString() === wordArray.toString()) {
        restartGame();
        wins++;
        console.log("you win");
    } 
}

// create a function to check the losses
function checkLosses(){
if (guesses === 0) { 
    losses++;
    // correctLetter.append("The flower name was" + " " + word);
    restartGame();
    console.log("you lost");
}
}

// create a function to restart the game
function restartGame() {
    guesses = 10;
    word = words[Math.floor(Math.random() * words.length)];
    letterArray = word.split("");
    guessedltr = [];
    wordArray = [];
    for (var i = 0; i < word.length; i++) {
        wordArray[i] = "_";
    }
    wgsd.innerHTML = wordArray.join(" ");
   
}

document.onkeypress = function (event) {
    guesses--;
    var userGuess = event.key;
    var uguess = userGuess.toLocaleUpperCase();
    /////
    guessedltr.push(uguess);
    //// check how this function works
    if (word.indexOf(uguess) > -1) {
        for (var i = 0; i < letterArray.length; i++) {
            if (letterArray[i] === uguess) {
                wordArray[i] = uguess;
            }
        }
       
        console.log("correct guess");
        console.log(wordArray);
        console.log(letterArray);
        document.getElementById("wgsd").innerHTML = wordArray;  

    }
    checkLosses();
    checkWin();

    document.getElementById("guessedltr").innerHTML = "Guessed Letters: " + guessedltr;
    console.log(userGuess);
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessed').innerHTML = "Guesses left: " + guesses;

}