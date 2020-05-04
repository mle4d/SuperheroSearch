const scoreBoard = document.querySelector('.score');
const wholeScore = document.querySelector('.wholescore');
const superheros = document.querySelectorAll('.superhero');
let score = 0;
function startWholeGame() {
  wholeScore.textContent = 0;
  timeUp = false;
  wholescore = 0;
}
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
}

function bonk(e) {
  if(!e.isTrusted) return;
  wholescore++;
  score++;
  scoreBoard.textContent = score;
  wholeScore.textContent = wholescore;
}

superheros.forEach(superhero => superhero.addEventListener('click', bonk));

// document.querySelector('.round3').addEventListener('click', function() {
//   document.querySelector('.superhero1').style.background = 'url(assets/superheros/wonderwoman.png) center no-repeat';
//   document.querySelector('.superhero3').style.background = 'url(assets/superheros/superman.png) center no-repeat';
//   document.querySelector('.superhero4').style.background = 'url(assets/superheros/Elastigirl.png) center no-repeat';
//   document.querySelector('.superhero5').style.background = 'url(assets/superheros/deadpool.png) center no-repeat';
//   document.querySelector('.superhero7').style.background = 'url(assets/superheros/superman.png) center no-repeat';
//   document.querySelector('.superhero8').style.background = 'url(assets/superheros/blackpanther.png) center no-repeat';
//   document.querySelector('.level').innerHTML = 'Round 3';
//   document.querySelector('.results').innerHTML = 'Difficulty Level: intermediate';
//   document.querySelector('.middle').style.opacity = '1';
//   document.querySelector('.round3').classList.toggle('go');
//   setTimeout(function() {
//     document.querySelector('.results').innerHTML = `you found ${score} out of 6`;
//     document.querySelector('.round3').style.display = 'none';
//     document.querySelector('.round4').style.display = 'flex';
//     document.querySelector('.superhero1').style.background = 'none';
//     document.querySelector('.superhero3').style.background = 'none';
//     document.querySelector('.superhero4').style.background = 'none';
//     document.querySelector('.superhero5').style.background = 'none';
//     document.querySelector('.superhero7').style.background = 'none';
//     document.querySelector('.superhero8').style.background = 'none';
// }, 30000);
//   window.body
// });

document.querySelector('.superhero2').addEventListener('click', function() {
  document.querySelector('.superhero2').style.display = 'none';
  window.body
});

let countdown;
const timerDisplay = document.querySelector('.timer');
const buttons = document.querySelectorAll('[data-time]');
const buzzer = new Audio ('assets/sounds/buzzersound.m4a');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);


  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 6) {
      timerDisplay.style.color ='#f23c27';

      buzzer.play()
    }
    if(secondsLeft < 0) {
      clearInterval(countdown);
      buzzer.pause()
      document.querySelector('.timer').style.color ='#1b729f';
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}


function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

