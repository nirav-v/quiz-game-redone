console.log(questions)
// only start screen visible at first

var startBtnEl = document.getElementById('start-btn');

//Initialize question index to 0

// upon click of start button, start screen hidden, 
function startGame(){
    var startScreenEL = document.querySelector('.start')
    startScreenEL.setAttribute("style", "display: none")
    startScreenEL.style.visibility = 'hidden';

    // question div becomes visible
    var questionEL = document.querySelector(".question");
    questionEL.removeAttribute("style");
}

startBtnEl.onclick = startGame;
