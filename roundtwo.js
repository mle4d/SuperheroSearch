document.querySelector('.round2').addEventListener('click', function() {
  document.querySelector('.superhero1').style.display = 'flex';
  document.querySelector('.superhero1').classList.add('batman');
  document.querySelector('.superhero3').classList.add('greenlantern');
  document.querySelector('.superhero4').classList.add('wolverine');
  document.querySelector('.superhero8').classList.add('greenranger');
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
  document.querySelector('.batman').addEventListener('click', function() {
    document.querySelector('.batman').style.display = 'none';
    const testsound = new Audio ('assets/sounds/batmansound.mp3');
    testsound.play();
    window.body
  });
});