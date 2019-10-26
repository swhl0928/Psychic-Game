var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessessoFar=[];

var directionText = document.getElementById("direction-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", ",o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess)
    guessessoFar.push(userGuess);
    console.log(guessessoFar);
    
 if ((userGuess === computerGuess))  {
     wins++;
     guessessoFar=[];
     computerGuess=computerChoices [Math.floor(Math.random()*computerGuess.length)];
     console.log(computerGuess);
 } 

 else {
     guessesLeft-=1
 }

 if((guessesLeft == 0)){
     losses++;
     guessessoFar=[];
     guessesLeft=9;
 }



    guessesSoFarText.textContent = "Guesses so far: " + guessessoFar;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guess Left: " + guessesLeft;

}