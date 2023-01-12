// so have a box at the top that essentially is an array that has different polish words and phrases as each index of the array
// then underneath are four options, each are different english words and phrases and you have to choose which one is the correct one
// these four options are the same arrays and each one is randomised once the user clicks the correct answer
// the next button skips to the next question where it randomly generates all of the different boxes - both english and polish
// if the user clicks the correct answer then their score goes up by 1
// if the user selects the wrong answer then the computers score goes up
// have it so instead of a next button when you click the correct box then the boxes are randomised again
// potential issues
// how to make the box that has the correct answer in change everytime
// try and make it so that once an index of the array is done then that option cannot be chosen again - maybe run a function that uses a
// splice and returns a new array to choose from that doesnt have this index?
// then you can move onto the next level when you get all fifteen answers correct and can move onto the next level of difficulty

// so step one is to make the divs that hold the polish phrase and then the four english words and phrases below --- done
// then create an array of polish words and a corresponding array of english words --- done
// then make it so that when you click a button saying start the buton dissapears and the four boxes randomly generate their arrays (need to
// figure out how to change the position of the correctr answer!)
// assign each option a var... then if var option [index] matches [polishIndex] then okay but if any === then redo
// then make it so that onclick of right corresponding answer they all randomise again but without the previous polish phrase in the array
// also make it so that onclick of correct answer the player score goes up and then computer goes up if wrong
// then make it so when the array runs out the game ends
// then make it so that when user wins 10-0 there is a new array

{
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
}
const obj = {
  a: "b",
  c: "d",
};

Object.keys(obj); // [a, d]
Object.values(obj); // [b, d]
{
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
}

const polish = document.getElementById("polishBox");
const englishAll = document.getElementsByClassName("options");
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

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

function beginGame() {
  polish.innerHTML = polArr[generateRandomInteger(9)];
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
const buttons = document.querySelectorAll(".buttons");
//const buttons = document.querySelectorAll('button')

// this function below sets the inner html of the divs as the inherit player and computer score.

window.onload = function () {
  playerLiveScore.innerHTML = playerScore;
  computerLiveScore.innerHTML = computerScore;
};

// this should update player score but isnt working... i think the buttons const isnt working

// this updates the inner html of the players score with the current score

function updatingPlayerScore() {
  playerLiveScore.innerHTML = playerScore;
}

// this updates the inner html of the computers score with the current score

function updatingComputerScore() {
  computerLiveScore.innerHTML = computerScore;
}
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    updatingPlayerScore();
  });
});

// this should update computer score but isnt working... i think the buttons const isnt working
console.log(document.querySelectorAll("buttons"));
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    updatingComputerScore();
  });
});

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
