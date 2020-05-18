document.querySelector('.round2').addEventListener('click', function() {
  document.querySelector('.superhero2').classList.add('batman');
  document.querySelector('.superhero5').classList.add('shera');
  document.querySelector('.superhero6').classList.add('elastigirl');
  document.querySelector('.superhero7').classList.add('greenlantern');
  document.querySelector('.superhero9').classList.add('gekko');
  document.querySelector('.level').innerHTML = 'Round 2';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Easy';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round2').style.visibility = 'hidden';
  document.querySelector('#press').style.visibility = 'hidden';

  document.querySelector('.batman').addEventListener('click', function() {
    document.querySelector('.batman').style.display = 'none';
    const batmansound = new Audio ('assets/sounds/batmansound.mp3');
    batmansound.play();
  });
    document.querySelector('.shera').addEventListener('click', function() {
    document.querySelector('.shera').classList.remove('shera');
    const sherasound = new Audio ('assets/sounds/sherasound.m4a');
    sherasound.play();
  });
  document.querySelector('.elastigirl').addEventListener('click', function() {
    document.querySelector('.elastigirl').classList.remove('elastigirl');
    const elastigirlsound = new Audio ('assets/sounds/elastigirlsound.wav');
    elastigirlsound.play();
  });
  document.querySelector('.greenlantern').addEventListener('click', function() {
    document.querySelector('.greenlantern').classList.remove('greenlantern');
    const greenlanternsound = new Audio ('assets/sounds/greenlanternsound.mp3');
    greenlanternsound.play();
  });
  document.querySelector('.gekko').addEventListener('click', function() {
    document.querySelector('.gekko').style.display = 'none';
    const gekkosound = new Audio ('assets/sounds/gekkosound.mp3');
    gekkosound.play();
  });
  setTimeout(function() {
    document.querySelector('.round2').style.display = 'none';
    document.querySelector('.round3').style.display = 'flex';
    document.querySelector('#press').style.visibility = 'visible';
    document.querySelector('.results').innerHTML = `you found ${score} out of 5`;
    document.querySelector('.superhero2').classList.remove('batman');
    document.querySelector('.superhero5').classList.remove('shera');
    document.querySelector('.superhero6').classList.remove('elastigirl');
    document.querySelector('.superhero7').classList.remove('greenlantern');
    document.querySelector('.superhero9').classList.remove('gekko');
      }, 30000);
    window.body
});
