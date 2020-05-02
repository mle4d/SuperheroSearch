const scoreBoard = document.querySelector('.score');
const superheros = document.querySelectorAll('.superhero');
let score = 0;
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
}

function bonk(e) {
  if(!e.isTrusted) return;
  score++;
  scoreBoard.textContent = score;
}

superheros.forEach(superhero => superhero.addEventListener('click', bonk));

document.querySelector('.play').addEventListener('click', function() {
  document.querySelector('.superhero1').style.background = 'url(assets/superheros/Buzz.png) center no-repeat';
  document.querySelector('.superhero3').style.background = 'url(assets/superheros/deadpool.png) center no-repeat';
  document.querySelector('.superhero4').style.background = 'url(assets/superheros/wolverine.png) center no-repeat';
  document.querySelector('.superhero8').style.background = 'url(assets/superheros/greenranger.png) center no-repeat';
  document.querySelector('.level').innerHTML = 'Round 1';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Beginner';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.play').classList.toggle('go');
  setTimeout(function() {
  document.querySelector('.results').innerHTML = `you found ${score} out of 4`;
  document.querySelector('.play').style.display = 'none';
  document.querySelector('.round2').style.display = 'flex';
  document.querySelector('.superhero1').style.background = 'none';
  document.querySelector('.superhero3').style.background = 'none';
  document.querySelector('.superhero4').style.background = 'none';
  document.querySelector('.superhero8').style.background = 'none';
}, 30000);
  window.body
});

document.querySelector('.round2').addEventListener('click', function() {
  document.querySelector('.superhero2').style.background = 'url(assets/superheros/ladybug.png) center no-repeat';
  document.querySelector('.superhero5').style.background = 'url(assets/superheros/captainmarvel.png) center no-repeat';
  document.querySelector('.superhero6').style.background = 'url(assets/superheros/hulk.png) center no-repeat';
  document.querySelector('.superhero7').style.background = 'url(assets/superheros/bumblebee.png) center no-repeat';
  document.querySelector('.superhero9').style.background = 'url(assets/superheros/ironman.png) center no-repeat';
  document.querySelector('.level').innerHTML = 'Round 2';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Easy';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round2').classList.toggle('go');
  setTimeout(function() {
    document.querySelector('.results').innerHTML = `you found ${score} out of 5`;
    document.querySelector('.round2').style.display = 'none';
    document.querySelector('.round3').style.display = 'flex';
    document.querySelector('.superhero2').style.background = 'none';
    document.querySelector('.superhero5').style.background = 'none';
    document.querySelector('.superhero6').style.background = 'none';
    document.querySelector('.superhero7').style.background = 'none';
    document.querySelector('.superhero9').style.background = 'none';
}, 30000);
  window.body
});
document.querySelector('.round3').addEventListener('click', function() {
  document.querySelector('.superhero1').style.background = 'url(assets/superheros/wonderwoman.png) center no-repeat';
  document.querySelector('.superhero3').style.background = 'url(assets/superheros/superman.png) center no-repeat';
  document.querySelector('.superhero4').style.background = 'url(assets/superheros/Elastigirl.png) center no-repeat';
  document.querySelector('.superhero5').style.background = 'url(assets/superheros/deadpool.png) center no-repeat';
  document.querySelector('.superhero7').style.background = 'url(assets/superheros/superman.png) center no-repeat';
  document.querySelector('.superhero8').style.background = 'url(assets/superheros/blackpanther.png) center no-repeat';
  document.querySelector('.level').innerHTML = 'Round 3';
  document.querySelector('.results').innerHTML = 'Difficulty Level: intermediate';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round3').classList.toggle('go');
  setTimeout(function() {
    document.querySelector('.results').innerHTML = `you found ${score} out of 6`;
    document.querySelector('.round3').style.display = 'none';
    document.querySelector('.round4').style.display = 'flex';
    document.querySelector('.superhero1').style.background = 'none';
    document.querySelector('.superhero3').style.background = 'none';
    document.querySelector('.superhero4').style.background = 'none';
    document.querySelector('.superhero5').style.background = 'none';
    document.querySelector('.superhero7').style.background = 'none';
    document.querySelector('.superhero8').style.background = 'none';
}, 30000);
  window.body
});

document.querySelector('.superhero1').addEventListener('click', function() {
  document.querySelector('.superhero1').style.display = 'none';
  window.body
});
document.querySelector('.superhero2').addEventListener('click', function() {
  document.querySelector('.superhero2').style.display = 'none';
  window.body
});
document.querySelector('.superhero3').addEventListener('click', function() {
  document.querySelector('.superhero3').style.display = 'none';
  window.body
});
document.querySelector('.superhero4').addEventListener('click', function() {
  document.querySelector('.superhero4').style.display = 'none';
  window.body
});
document.querySelector('.superhero5').addEventListener('click', function() {
  document.querySelector('.superhero5').style.display = 'none';
  window.body
});
document.querySelector('.superhero6').addEventListener('click', function() {
  document.querySelector('.superhero6').style.display = 'none';
  window.body
});
document.querySelector('.superhero7').addEventListener('click', function() {
  document.querySelector('.superhero7').style.display = 'none';
  window.body
});
document.querySelector('.superhero8').addEventListener('click', function() {
  document.querySelector('.superhero8').style.display = 'none';
  window.body
});
document.querySelector('.superhero9').addEventListener('click', function() {
  document.querySelector('.superhero9').style.display = 'none';
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

