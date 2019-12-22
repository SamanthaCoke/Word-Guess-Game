var hiddenWords = [
  "APPLE",
  "AVOCADO",
  "BANANA",
  "BLUEBERRY",
  "COCONUT",
  "GRAPES",
  "PEAR",
  "PEACH",
  "PLUM",
  "ORANGE"
];

var guessLimit = 5;
var guessedLetters = [];
var dash = [];
var remainingGuesses = 0;
var numWins = 0;
var numLosses = 0;
var isComplete = false;
var ansWord;
var isFinished = true

function setup() {
  // choose a word randomly
  ansWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
  console.log("aw",ansWord)
  // create the dashes. # of dashes is the length of the word
  dash = [];
  for (var i = 0; i < ansWord.length; i++) {
    dash[i] = "_";
  }

  remainingGuesses = ansWord.length + 1;
  guessedLetters = [];

  document.getElementById("numGuesses").style.color = "";
  updateScreen();
}

function updateScreen() {
  document.getElementById("numWins").innerText = numWins;
  document.getElementById("numLosses").innerText = numLosses;
  document.getElementById("numGuesses").innerText = remainingGuesses;
  document.getElementById("answerWord").innerText = dash.join(" ");
  document.getElementById("guessedLetters").innerText = guessedLetters;
}

function checkGuess(letter) {
  letter = letter.toUpperCase();
  if (guessedLetters.indexOf(letter) === -1) {
    if (ansWord.indexOf(letter) === -1) {
      guessedLetters.push(letter);
      remainingGuesses--;
      if (remainingGuesses<= 0) {
        console.log("you lost")
        isLoser();
      }
    } else {
      for (var i = 0; i < ansWord.length; i++) { 
        if (letter === ansWord[i]) {
          dash[i] = letter;
        }
      }
      isWinner();
    }
  }
}

function isWinner() {
  if (dash.indexOf("_") === -1) {
    numWins++;
    isFinished = true;
    // if (ansWord === "APPLE") {
    // } else if (ansWord === "AVOCADO") {
    // } else if (ansWord === "BANANA") {
    // } else if (ansWord === "BLUEBERRY") {
    // } else if (ansWord === "COCONUT") {
    // } else if (ansWord === "GRAPES") {
    // } else if (ansWord === "PEAR") {
    // } else if (ansWord === "PEACH") {
    // } else if (ansWord === "PLUM") {
    // } else if (ansWord === "ORANGE") {
    // }
  }
}

function isLoser() {
  if (remainingGuesses <= 0) {
    numLosses++;
    isFinished = true;
  }
}

document.onkeyup = function(event) {
  // document.getElementById("letter").innerText += event.key.toUppperCase();
  console.log("a key is being clicked");
  if (isFinished) {
    setup();
    isFinished = false;
  } else {
    console.log(event.key)
    checkGuess(event.key)
    updateScreen();
  }
};

