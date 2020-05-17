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
      buzzer.currentTime=1;
      buzzer.play()
    }
    if(secondsLeft < 0) {
      buzzer.currentTime=5;
      buzzer.play()
      clearInterval(countdown);
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
