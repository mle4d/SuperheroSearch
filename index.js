document.querySelector('.play').addEventListener('click', function() {
  document.querySelector('.block1').innerHTML = '<img class="superhero" src="assets/superheros/Buzz.png">';
  document.querySelector('.block3').innerHTML = '<img class="superhero" src="assets/superheros/deadpool.png">';
  document.querySelector('.block4').innerHTML = '<img class="superhero" src="assets/superheros/wolverine.png">';
  document.querySelector('.block8').innerHTML = '<img class="superhero" src="assets/superheros/greenranger.png">';
  document.querySelector('.level').innerHTML = 'Level 1';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.play').style.background = 'url(assets/go.png) center no-repeat';
  document.querySelector('.play').style.backgroundSize = '80%';
  window.body
});
let countdown;
const timerDisplay = document.querySelector('.timer');
const buttons = document.querySelectorAll('[data-time]');




function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);


  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
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
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});