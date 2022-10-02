console.log(questions)
// only start screen visible at first
// upon click of start button, start screen hidden, question div becomes visible

var startBtnEl = document.getElementById('start-btn');

function startGame(){
    var startScreenEL = document.querySelector('.start')
    startScreenEL.setAttribute("style", "display: none")
    startScreenEL.style.visibility = 'hidden';
}

startBtnEl.onclick = startGame;
