/*
The project essentiall is this 

1. the polish word at the top, this is randomly generated.The values of this is stored in an object. Checks whether this aligns with the english to give score.
(my polish box now generates randomly)
2. the english options at the bottom. When the polish key is generated, the english corresponding value is stored in a random box, the other options are randomly
 generated form othe key values.
(currently have it so that a randomly generated coresponding answer is in the boxes) now need the other boxes randomly generated
3. The buttons the user clicks, when the user selects an answer, the click stores the users answer in a variable and checks if it matches the polish, if it does 
player score +1 if wrong computer score +1
4. Finally you have the scores at the bottom which update with every click.
*/

const polishBoxes = document.getElementById("polishBox");
const englishBoxes = document.getElementsByClassName("options");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
const englishAndPolishWords = {
  beer: "piwo",
  why: "czemu",
  instead: "zamiast",
  excuseMe: "przepraszam",
  thankYou: "dziekuje",
  good: "dobry",
  bad: "niedobry",
  morning: "ranek",
  afternoon: "popludnie",
  evening: "wieczor",
};

let englishWords = Object.keys(englishAndPolishWords);
let polishWords = Object.values(englishAndPolishWords);

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function getValueByKey(object, key) {
  return object[key];
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

function randomPolishAndCorrespondingEnglish() {
  let randomPolishWordIndex = generateRandomInteger(9);
  let randomEnglishWordIndex = generateRandomInteger(3);
  const questionAnswer = polishWords[randomPolishWordIndex];
  polishBoxes.innerHTML = questionAnswer; // generates random polish word - 1/4
  //   const correctEnglishWord = getKeyByValue(
  //     englishAndPolishWords,
  //     questionAnswer
  //   );
  //   console.log("right word", correctEnglishWord);
  //   englishBoxes[randomEnglishWordIndex].innerHTML = correctEnglishWord;
  //   const incorrectEnglishWords = englishWords.filter(
  //     (word) => word !== correctEnglishWord
  //   );

  //   const englishBoxArray = Array.from(englishBoxes);
  //   englishBoxArray.forEach((englishBox) => {
  //     const alreadyUsedWords = englishBoxArray.map((box) => {
  //       console.log("box", box, box.innerHTML);
  //       return box.innerHTML;
  //     });
  //     const wordsToChoseFrom = incorrectEnglishWords.filter(
  //       (word) => !alreadyUsedWords.includes(word)
  //     );
  //     console.log(alreadyUsedWords, wordsToChoseFrom);
  //     if (!englishWords.includes(englishBox.innerHTML)) {
  //       console.log("hit if statement");
  //       const randomWrongWord =
  //         wordsToChoseFrom[generateRandomInteger(wordsToChoseFrom.length - 1)];
  //       console.log("wrods to choose from", wordsToChoseFrom, randomWrongWord);
  //       englishBox.innerHTML = randomWrongWord;
  //     }
  //   });
}

// The scoring system

// console.log();
// const btns = Array.from(document.querySelectorAll(".buttons"));
// btns.forEach((btn) => (btn.answer = "hello"));
// btns[0].addEventListener("click", (e) => console.log(e.target));

const btns = Array.from(document.querySelectorAll(".buttons"));
const firstButton = btns[0];
btns.forEach((btn) => btn.setAttribute("data-answer", "hello"));

firstButton.addEventListener("click", (event) => handleAnswerClick(event));
function handleAnswerClick(event) {
  // get polish correct word
  // get the user clicked answer using event.target['data-answer']
  // check to see if the answer is correct using the key value pairs you have above
  // do something depending on the answer
}

function evaluateAnswer(answer) {
  //does some code to evaluate the answer
}

function selectsPlayersAnswerOptionOne() {
  let userChoice = englishBoxes[0].innerHTML;
  let userAnswer = getValueByKey(englishAndPolishWords, userChoice);
  if (polishBoxes.innerHTML === userAnswer) {
    playerScore++;
  } else {
    computerScore++;
  }
}
function selectsPlayersAnswerOptionTwo() {
  let userChoice = englishBoxes[1].innerHTML;
  let userAnswer = getValueByKey(englishAndPolishWords, userChoice);
  if (polishBoxes.innerHTML === userAnswer) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function selectsPlayersAnswerOptionThree() {
  let userChoice = englishBoxes[2].innerHTML;
  let userAnswer = getValueByKey(englishAndPolishWords, userChoice);
  if (polishBoxes.innerHTML === userAnswer) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function selectsPlayersAnswerOptionFour() {
  let userChoice = englishBoxes[3].innerHTML;
  let userAnswer = getValueByKey(englishAndPolishWords, userChoice);
  if (polishBoxes.innerHTML === userAnswer) {
    playerScore++;
  } else {
    computerScore++;
  }
}

/* 
let answer = getKeyByValue(englishAndPolishWords, polishWords[a]);
let j =0;
do {englishBoxes[j].innerHTML = englishWords[generateRandomInteger(9)], j++}
while (englishBoxes[j].innerHTML !== answer)




    /**
    Think of the program and a set of rounds. And think of each round indepdently. If you can figure out how 1 round works you've made the whole game
    as a game is just a sequence of rounds 
    Think about what happens in each stage of a single round, one 'stage' of a single round can be thought of in terms of UI updates.
    If at any point the UI updates that can be thought of as the 'end' of the previous stage and the beginning of a new 'stage'
    I.e the first stage of a round is when everything has default values the very start of the game. The second stage is when the user takes some action, in this case a button click 
    they choose an answer and then we must take their answer and do something with it, this means the UI will update and signifies a second 'stage' in the round. Sometimes 'stages' are reffered to as the 'state' of the game.
    
    Start by creating an obj of key value pairs which map from polish words to their corresponding english words. 
    1. Generate a random polish word  from an array of polish words. A useful function for this is Object.keys, look it up and use it do not create another array
    2. Generate 3 random english words and the correct english word, A useful function for this is Object.values, same as above
    3. attach the 3 english words to the buttons youve created
    4. Compare the answer from the buttons the user clicks to the polish word answer
    After thats done, the final way is getting the polish to english translations from an API and that can be customised further.
    */

const obj = {
  a: "b",
  c: "d",
};

/**
  SOME PSEUDOCODE
  const englishWordsToCorrespondingPolishWords ={
    beer: 'piwo',
    why: 'czemu'
  }
  // User answer comes from the button click, answer is ideally calculated indepdent of the UI rendering
  // for example make a variable at the top which stores the current answer, this variable could be changed everytime a round is generated
  // then when the button is clicked you pass both the answer from the button (userAnswer in this case) and the answer from your variable 
  // that contains the coresponding polish word
  // Then instead of the if else statements it becomes a simple lookup on the obj above. 
  // A lookup in this case means take a key from an object get the corresponding value associated with that key in the object. 
  // i.e 'Lookup' the value that my chosen key 'points' to.
  const checkAnswer = (userAnswer, answer) => {
    if (obj[userAnswer] === answer){ 
      do correct stuff 
    }
     do wrong stuff 
  }
  */

// const englishAll = document.getElementsByClassName('options');
let polArr = [
  "piwo",
  "czemu",
  "zamiast",
  "przepraszam",
  "dziekuje",
  "dobry",
  "niedobry",
  "ranek",
  "popludnie",
  "wieczor",
];
let engArr = [
  "beer",
  "why",
  "instead",
  "excuse me",
  "thank you",
  "good",
  "bad",
  "morning",
  "afternoon",
  "evening",
];

function beginGame() {
  for (var i = 0; i < englishAll.length; i++) {
    englishAll[i].innerHTML = engArr[generateRandomInteger(9)];
  }
  if (polish.innerHTML === "piwo") {
    piwo();
  }
  if (polish.innerHTML === "czemu") {
    czemu();
  }
  if (polish.innerHTML === "zamiast") {
    zamiast();
  }
  if (polish.innerHTML === "przepraszam") {
    przepraszam();
  }
  if (polish.innerHTML === "dziekuje") {
    dziekuje();
  }
  if (polish.innerHTML === "dobry") {
    dobry();
  }
  if (polish.innerHTML === "niedobry") {
    niedobry();
  }
  if (polish.innerHTML === "ranek") {
    ranek();
  }
  if (polish.innerHTML === "popludnie") {
    popludnie();
  }
  if (polish.innerHTML === "wieczor") {
    wieczor();
  }
  if (englishAll[0].innerHTML === englishAll[1].innerHTML) {
    beginGame();
  }
  if (englishAll[0].innerHTML === englishAll[2].innerHTML) {
    beginGame();
  }
  if (englishAll[0].innerHTML === englishAll[3].innerHTML) {
    beginGame();
  }
  if (englishAll[1].innerHTML === englishAll[2].innerHTML) {
    beginGame();
  }
  if (englishAll[1].innerHTML === englishAll[3].innerHTML) {
    beginGame();
  }
  if (englishAll[2].innerHTML === englishAll[3].innerHTML) {
    beginGame();
  }
}

function piwo() {
  if (
    englishAll[0] !== "beer" &&
    englishAll[1] !== "beer" &&
    englishAll[2] !== "beer" &&
    englishAll[3] !== "beer"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "beer";
  }
}

function czemu() {
  if (
    englishAll[0] !== "why" &&
    englishAll[1] !== "why" &&
    englishAll[2] !== "why" &&
    englishAll[3] !== "why"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "why";
  }
}

function zamiast() {
  if (
    englishAll[0] !== "instead" &&
    englishAll[1] !== "instead" &&
    englishAll[2] !== "instead" &&
    englishAll[3] !== "instead"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "instead";
  }
}

function przepraszam() {
  if (
    englishAll[0] !== "excuse me" &&
    englishAll[1] !== "excuse me" &&
    englishAll[2] !== "excuse me" &&
    englishAll[3] !== "excuse me"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "excuse me";
  }
}

function dziekuje() {
  if (
    englishAll[0] !== "thank you" &&
    englishAll[1] !== "thank you" &&
    englishAll[2] !== "thank you" &&
    englishAll[3] !== "thank you"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "thank you";
  }
}

function dobry() {
  if (
    englishAll[0] !== "good" &&
    englishAll[1] !== "good" &&
    englishAll[2] !== "good" &&
    englishAll[3] !== "good"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "good";
  }
}

function niedobry() {
  if (
    englishAll[0] !== "bad" &&
    englishAll[1] !== "bad" &&
    englishAll[2] !== "bad" &&
    englishAll[3] !== "bad"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "bad";
  }
}

function ranek() {
  if (
    englishAll[0] !== "morning" &&
    englishAll[1] !== "morning" &&
    englishAll[2] !== "morning" &&
    englishAll[3] !== "morning"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "morning";
  }
}

function popludnie() {
  if (
    englishAll[0] !== "afternoon" &&
    englishAll[1] !== "afternoon" &&
    englishAll[2] !== "afternoon" &&
    englishAll[3] !== "afternoon"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "afternoon";
  }
}

function wieczor() {
  if (
    englishAll[0] !== "evening" &&
    englishAll[1] !== "evening" &&
    englishAll[2] !== "evening" &&
    englishAll[3] !== "evening"
  ) {
    englishAll[generateRandomInteger(3)].innerHTML = "evening";
  }
}

// need to figure out how to update the score system and then upload to github and add abai!

let playerLiveScore = document.getElementById("playerScore"); // this variable selects the player score div
let computerLiveScore = document.getElementById("computerScore"); // this variable selects the computer score div
let playerScore = 0; // this sets the player score as 0
let computerScore = 0; // this sets the computer score as 0
const buttons = document.getElementsByClassName("buttons");
// const buttons = document.querySelectorAll('button') this returns an node list of buttons but isnt working

// this function below sets the inner html of the divs as the inherit player and computer score.

window.onload = function () {
  playerLiveScore.innerHTML = playerScore;
  computerLiveScore.innerHTML = computerScore;
};

// this should update player score but isnt working... i think the buttons const isnt working

// add event listener that takes the users answer adn checksmit with the polish

// buttons.forEach(button =>{
//  button.addEventListener('click', function(){
//    updatingPlayerScore()
// })
// });

// this should update computer score but isnt working... i think the buttons const isnt working

// buttons.forEach(button =>{
// button.addEventListener('click', function(){
//   updatingComputerScore()
// })
// });

// this updates the inner html of the players score with the current score

function updatingPlayerScore() {
  playerLiveScore.innerHTML = playerScore;
}

// this updates the inner html of the computers score with the current score

function updatingComputerScore() {
  computerLiveScore.innerHTML = computerScore;
}

function optionOne() {
  if (polish.innerHTML === "piwo" && englishAll[0].innerHTML === "beer") {
    playerScore++;
  } else if (
    polish.innerHTML === "czemu" &&
    englishAll[0].innerHTML === "why"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "zamiast" &&
    englishAll[0].innerHTML === "instead"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "przepraszam" &&
    englishAll[0].innerHTML === "excuse me"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "dziekuje" &&
    englishAll[0].innerHTML === "thank you"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "dobry" &&
    englishAll[0].innerHTML === "good"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "niedobry" &&
    englishAll[0].innerHTML === "bad"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "ranek" &&
    englishAll[0].innerHTML === "morning"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "popludnie" &&
    englishAll[0].innerHTML === "afternoon"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "wieczor" &&
    englishAll[0].innerHTML === "evening"
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function optionTwo() {
  if (polish.innerHTML === "piwo" && englishAll[1].innerHTML === "beer") {
    playerScore++;
  } else if (
    polish.innerHTML === "czemu" &&
    englishAll[1].innerHTML === "why"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "zamiast" &&
    englishAll[1].innerHTML === "instead"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "przepraszam" &&
    englishAll[1].innerHTML === "excuse me"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "dziekuje" &&
    englishAll[1].innerHTML === "thank you"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "dobry" &&
    englishAll[1].innerHTML === "good"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "niedobry" &&
    englishAll[1].innerHTML === "bad"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "ranek" &&
    englishAll[1].innerHTML === "morning"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "popludnie" &&
    englishAll[1].innerHTML === "afternoon"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "wieczor" &&
    englishAll[1].innerHTML === "evening"
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function optionThree() {
  if (polish.innerHTML === "piwo" && englishAll[2].innerHTML === "beer") {
    playerScore++;
  } else if (
    polish.innerHTML === "czemu" &&
    englishAll[2].innerHTML === "why"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "zamiast" &&
    englishAll[2].innerHTML === "instead"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "przepraszam" &&
    englishAll[2].innerHTML === "excuse me"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "dziekuje" &&
    englishAll[2].innerHTML === "thank you"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "dobry" &&
    englishAll[2].innerHTML === "good"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "niedobry" &&
    englishAll[2].innerHTML === "bad"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "ranek" &&
    englishAll[2].innerHTML === "morning"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "popludnie" &&
    englishAll[2].innerHTML === "afternoon"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "wieczor" &&
    englishAll[2].innerHTML === "evening"
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function optionFour() {
  if (polish.innerHTML === "piwo" && englishAll[3].innerHTML === "beer") {
    playerScore++;
  } else if (
    polish.innerHTML === "czemu" &&
    englishAll[3].innerHTML === "why"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "zamiast" &&
    englishAll[3].innerHTML === "instead"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "przepraszam" &&
    englishAll[3].innerHTML === "excuse me"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "dziekuje" &&
    englishAll[3].innerHTML === "thank you"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "dobry" &&
    englishAll[3].innerHTML === "good"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "niedobry" &&
    englishAll[3].innerHTML === "bad"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "ranek" &&
    englishAll[3].innerHTML === "morning"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "popludnie" &&
    englishAll[3].innerHTML === "afternoon"
  ) {
    playerScore++;
  } else if (
    polish.innerHTML === "wieczor" &&
    englishAll[3].innerHTML === "evening"
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
}

// mapping one thing points to the other
// use object - key value pair for data
// put the data first
// make it so instead of it not working make it so that always put right answer in and then three other //
