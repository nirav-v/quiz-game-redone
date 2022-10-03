// only start screen visible at first
var startScreenEL = document.querySelector(".start");
var startBtnEl = document.getElementById("start-btn");
var titleEl = document.querySelector(".question-title");
var choicesDiv = document.querySelector(".choices");

// Initialize questionIndex to 0
var questionIndex = 0;

// upon click of start button, start screen hidden,
const startGame = function () {
  startScreenEL.setAttribute("style", "display: none");
  startScreenEL.style.visibility = "hidden";

  // question div becomes visible
  var questionDiv = document.querySelector(".question");
  questionDiv.removeAttribute("style");
  showQuestion();
};

const showQuestion = function () {
  // set the question title text content to title of question[questionIndex]
  titleEl.textContent = questions[questionIndex].question;

  // create a button for each of question[questionIndex]'s choices,
  for (let i = 0; i < questions[questionIndex].choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = questions[questionIndex].choices[i];
    // append to choices div
    choicesDiv.append(choiceButton);
    choiceButton.onclick = checkAnswer;
  }
};

// check answer function
const checkAnswer = function () {
  let guess = event.target.textContent;

  if (guess == questions[questionIndex].answer) {
    console.log("correct answer");
    //clear out the current question's choice buttons
    choicesDiv.textContent = "";
    // move to next question
    questionIndex++;
    showQuestion();
  } else {
    console.log("WRONG");
  }
};

startBtnEl.onclick = startGame;
