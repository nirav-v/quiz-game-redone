// only start screen visible at first
var startBtnEl = document.getElementById("start-btn");

// upon click of start button, start screen hidden,
const startGame = function(){
  var startScreenEL = document.querySelector(".start");
  startScreenEL.setAttribute("style", "display: none");
  startScreenEL.style.visibility = "hidden";

  // question div becomes visible
  var questionDiv = document.querySelector(".question");
  questionDiv.removeAttribute("style");
  showQuestion();
}

const showQuestion = function () {
  // Initialize questionIndex to 0
  var questionIndex = 0;
  console.log(questions);

  // set the question title text content to title of question[questionIndex]
  var titleEl = document.querySelector(".question-title");
  titleEl.textContent = questions[questionIndex].question;

  var choicesDiv = document.querySelector('.choices');
  // create a button for each of question[questionIndex]'s choices, 
  for (let i = 0; i < questions[questionIndex].choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = questions[questionIndex].choices[i];
    // append to choices div
    choicesDiv.append(choiceButton);
  }
}

// check answer function
const checkAnswer = function(){

}


startBtnEl.onclick = startGame;
 