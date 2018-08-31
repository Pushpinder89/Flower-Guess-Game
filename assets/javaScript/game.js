//declaring the variables

var guesses = 10;
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessedltr = [];
var wordArray = [];
var words = ["amaryllis", "anemone", "jasmine", "lavender", "lily", "tulip"];
var word = words[Math.floor(Math.random() * words.length)];




    for (var i = 0; i < word.length; i++) {
         wordArray[i] = "_";
    }

    wgsd.innerHTML = wordArray.join(" ");

    console.log(wordArray);
    console.log(word);
    

    document.onkeypress = function (event) {
            var userGuess = event.key;
                    /////
                guessedltr.push(userGuess);
                    ////
                    if (word.indexOf(userGuess) > -1){
                        
                            console.log("correct guess");
                            guessedltr.append(wgsd);
                        wins++;
                    } else {
                        
                        guesses--;
                    }

                    /*if (guesses === 0) {
                        losses++;
                        //guesses = 10;

                        //guessedltr = "Out of guesses";

                    }*/
                  

    document.getElementById("guessedltr").innerHTML = "Guessed Letters: " + guessedltr;
    console.log(userGuess);
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessed').innerHTML = "Guesses left: " + guesses;

}


