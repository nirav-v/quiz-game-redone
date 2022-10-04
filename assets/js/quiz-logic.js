// only start screen visible at first
var wrapperDiv = document.querySelector(".wrapper");
var startScreenEL = document.querySelector(".start");
var startBtnEl = document.getElementById("start-btn");
var titleEl = document.querySelector(".question-title");
var questionDiv = document.querySelector(".question");
var choicesDiv = document.querySelector(".choices");

// Initialize questionIndex to 0
let questionIndex = 0;

// display the timer, 10 seconds per question
let time = questions.length * 10;
var timeEl = document.getElementById("time");
var timer;

// upon click of start button
const startGame = function () {
  // show starting time
  timeEl.textContent = "Time left: " + time;
   timer = setInterval(() => {
    //decrement and re-render time every 1 second
    timeEl.textContent = "Time left: " + time;
    time--;
    //stop timer at 0
    if (time <= 0) {
      endGame();
    }
  }, 1000);

  //hide the start screen
  startScreenEL.setAttribute("class", "hide");
  // startScreenEL.style.visibility = "hidden";

  // question div becomes visible by removing hide class name
  questionDiv.classList.remove("hide");

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
    // if we are at the last question, end the game
    if (questionIndex === questions.length - 1) {
      return endGame();
    }
    // move to next question
    questionIndex++;
    showQuestion();
  } else {
    console.log("WRONG");
  }
};

const endGame = function () {
  questionDiv.classList.add("hide")
  clearInterval(timer);
  console.log("game end");
  wrapperDiv.textContent = "GAME OVER. Your Score: " + time;
  
};

startBtnEl.onclick = startGame;
