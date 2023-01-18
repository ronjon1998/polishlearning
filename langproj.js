const polishBoxes = document.getElementById('polishBox');
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

    function roundWordRandomiser() {
        for (var i = 0; i < buttonsArr.length; i++) {
            buttonsArr[i].innerHTML= ""
        };
        let polishQuestionEnglishAnswerIndex = generateRandomInteger(0, polishWords.length-1);
        let whichEnglishBox = generateRandomInteger(0, buttonsArr.length-1);
        const question = polishWords[polishQuestionEnglishAnswerIndex];
        const answer = englishWords[polishQuestionEnglishAnswerIndex]
        polishBoxes.innerHTML = question;
        buttonsArr[whichEnglishBox].innerHTML = answer;
        // this code below - issue is that the filtered words eventually mean that only a handful of words in the fitlered array remain sometimes correct answer twice
        const englishWordsNotAnswer = englishWords.filter(word => word !== answer.innerHTML);
        const buttonsArrArray = [...buttonsArr]; 
        const buttonsArrNotInUse = buttonsArrArray.filter(box => box.innerHTML.length < 1);
        for (var i = 0; i < buttonsArrNotInUse.length; i++) {
            const differentEnglish = englishWordsNotAnswer.filter(word => word !== buttonsArrNotInUse[i-1]);
            buttonsArrNotInUse[i].innerHTML = differentEnglish[generateRandomInteger(0,englishWordsNotAnswer.length-1)]
        };
    };

function scoringSystem(i) {
        let userChoice = buttonsArr[i].innerHTML;
        let userAnswer = getValueByKey(englishAndPolishWords, userChoice);
        if (polishBoxes.innerHTML === userAnswer) {playerScore++}
        else {computerScore++};
        playerLiveScore.innerHTML = playerScore;
        computerLiveScore.innerHTML = computerScore;
        if (playerScore === 10) {
            playerLiveScore.innerHTML = "10 points!! Player has won!!";
            computerLiveScore.innerHTML = "computer has lost";
            buttonsArr[i].disabled = true;
        }
        if (computerScore === 10) {
            computerLiveScore.innerHTML = "10 points!! Computer has won!!";
            playerLiveScore.innerHTML = "player has lost";
            for (var i = 0; i<buttonsArr.length; i++) {
                buttonsArr[i].disabled = true;
            };
        }
};

// this line below is attempting to play a new round after every time an answer is clicked - but it is immediately called and no event triggers?

// buttonsArr.forEach((button) => button.addEventListener("click", roundWordRandomiser()));

// 2 - try and complete the first function so it works

// 4 - make it so that after every round the used polish word is removed from the available options so it is never used again

// 5 - make it so that once you win 10-0 a new buttons is enabled that once clicked, a new harder round with more words takes the place of the current one

const englishAndPolishWordsSecondRound = {
    Cheers : "Na zdrowie",
    Please : "Prosze",
    IDontUnderstand : "Nie rozumiem",
    WhatsYourName : "Jak masz na imię",
    ILoveYou : "Kocham cię",


}





/*

        // make a filter that takes away the polish words that have already been used

        // next need to create an array that is all of the used words and then randomise the polish  from that array max integer.length but lkeep the same english

        //   const correctEnglishWord = getKeyByValue(
        //     englishAndPolishWords,
        //     questionAnswer
        //   );
        //   console.log("right word", correctEnglishWord);
        //   buttonsArr[randomEnglishWordIndex].innerHTML = correctEnglishWord;
        //   const incorrectEnglishWords = englishWords.filter(
        //     (word) => word !== correctEnglishWord
        //   );
      
        //   const englishBoxArray = Array.from(buttonsArr);
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
      do {buttonsArr[j].innerHTML = englishWords[generateRandomInteger(9)], j++}
      while (buttonsArr[j].innerHTML !== answer)
};
// be explicit and then refactor

*/
