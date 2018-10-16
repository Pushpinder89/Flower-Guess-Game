//declaring the variables

var guesses = 10;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedltr = [];
var wordArray = [];
var words = ["amaryllis", "anemone", "jasmine", "lavender", "lily", "tulip"];
var word = words[Math.floor(Math.random() * words.length)];
var letterArray = word.split("");


for (var i = 0; i < word.length; i++) {
    wordArray[i] = "_";
}

wgsd.innerHTML = wordArray.join(" ");

console.log(wordArray);
console.log(word);

function checkWin() {
    if (letterArray.toString() === wordArray.toString()) {
        restartGame();
        wins++;
        console.log("you win");
    } 
}

function checkLosses(){
if (guesses === 0) {
    losses++;
    restartGame();
    console.log("you lost");
}
}

function restartGame() {
    guesses = 10;
    word = words[Math.floor(Math.random() * words.length)];
    letterArray = word.split("");
    guessedltr = [];
    wordArray = [];
    for (var i = 0; i < word.length; i++) {
        wordArray[i] = "_";
    }
}

document.onkeypress = function (event) {
    var userGuess = event.key;
    /////
    guessedltr.push(userGuess);
    ////
    if (word.indexOf(userGuess) > -1) {
        for (var i = 0; i < letterArray.length; i++) {
            if (letterArray[i] === userGuess) {
                wordArray[i] = userGuess;
            }
        }
        console.log("correct guess");
        console.log(wordArray);
        console.log(letterArray);
        document.getElementById("wgsd").innerHTML = wordArray;
       

    } else {
        
        guesses--;
        
    }
    checkLosses();
    checkWin();

    document.getElementById("guessedltr").innerHTML = "Guessed Letters: " + guessedltr;
    console.log(userGuess);
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessed').innerHTML = "Guesses left: " + guesses;

}