const polishBoxes = document.getElementById('polishBox');
const englishBoxes = document.getElementsByClassName('options');
const buttonsArr = Array.from(document.querySelectorAll(".buttons")); 
let computerScore = 0;
let playerScore = 0;
let playerLiveScore = document.getElementById('playerScore');   
let computerLiveScore = document.getElementById('computerScore');
const englishAndPolishWords = {
    beer : "piwo",
    why : "czemu",
    instead : "zamiast",
    excuseMe : "przepraszam",
    thankYou : "dziekuje",
    good : "dobry", 
    bad : "niedobry",
    morning : "ranek",
    afternoon : "popludnie",
    evening : "wieczor",
};

let englishWords = Object.keys(englishAndPolishWords);
let polishWords = Object.values(englishAndPolishWords);

window.onload = function() {
    playerLiveScore.innerHTML = playerScore;
    computerLiveScore.innerHTML = computerScore;
  };

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
};

function getValueByKey(object, key) {
    return object[key];
};

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

// This below function randomises (1) a polish word, (2) a correct english word, (3) and three other options, (4) none of which are the same

    function roundWordRandomiser() {
        // maybe have something here that depopulates the boxes to nothing before starting again
        let polishQuestionEnglishAnswerIndex = generateRandomInteger(0, polishWords.length-1);
        let whichEnglishBox = generateRandomInteger(0, englishBoxes.length-1);
        const question = polishWords[polishQuestionEnglishAnswerIndex];
        const answer = englishWords[polishQuestionEnglishAnswerIndex]
        polishBoxes.innerHTML = question; // 1
        englishBoxes[whichEnglishBox].innerHTML = answer; // 2
        // this code below puts english words that arent answer... needs to be all different though!
        const englishWordsNotAnswer = englishWords.filter(word => word !== answer.innerHTML);
        const englishBoxesArray = [...englishBoxes]; 
        const englishBoxesNotInUse = englishBoxesArray.filter(box => box.innerHTML.length < 1);
        for (var i = 0; i < englishBoxesNotInUse.length; i++) {
            englishBoxesNotInUse[i].innerHTML = englishWordsNotAnswer[generateRandomInteger(0,englishWordsNotAnswer.length-1)]
        };
        assigningButtonValue();
    };


// the scoring system

function assigningButtonValue() {
    for (var i = 0; i<buttonsArr.length; i++) {
        buttonsArr[i].innerHTML = englishBoxes[i].innerHTML;
    }
};

function scoringSystem(i) {
        let userChoice = buttonsArr[i].innerHTML;
        let userAnswer = getValueByKey(englishAndPolishWords, userChoice);
        if (polishBoxes.innerHTML === userAnswer) {playerScore++}
        else {computerScore++};
        playerLiveScore.innerHTML = playerScore;
        computerLiveScore.innerHTML = computerScore;
};

// this line below is attempting to play a new round after every time an answer is clicked - but it is immediately called and no event triggers?

// buttonsArr.forEach((button) => button.addEventListener("click", roundWordRandomiser()));

// 1 - make the buttons the only thing with the english in - remove the non button text

// 2 - try and complete the first function so it works

// 3 - make it so that once the game hits ten someone wins 

// 4 - make it so that after every round the used polish word is removed from the available options so it is never used again

// 5 - make it so that once you win 10-0, a new harder round with more words takes the place of level one







/*

        // make a filter that takes away the polish words that have already been used

        // next need to create an array that is all of the used words and then randomise the polish  from that array max integer.length but lkeep the same english

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
      
      // The scoring system
      
      // console.log();
      // const btns = Array.from(document.querySelectorAll(".buttons"));
      // btns.forEach((btn) => (btn.answer = "hello"));
      // btns[0].addEventListener("click", (e) => console.log(e.target));
      
      const btns = Array.from(document.querySelectorAll("buttons"));
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
      
      /* 
      let answer = getKeyByValue(englishAndPolishWords, polishWords[a]);
      let j =0;
      do {englishBoxes[j].innerHTML = englishWords[generateRandomInteger(9)], j++}
      while (englishBoxes[j].innerHTML !== answer)
};
// be explicit and then refactor

*/
