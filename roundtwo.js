document.querySelector('.round2').addEventListener('click', function() {
  document.querySelector('.superhero2').classList.add('batman');
  document.querySelector('.superhero5').classList.add('shera');
  document.querySelector('.superhero6').classList.add('elastigirl');
  document.querySelector('.superhero7').classList.add('greenlantern');
  document.querySelector('.superhero8').classList.add('gekko');
  document.querySelector('.level').innerHTML = 'Round 2';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Easy';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round2').classList.toggle('go');
  setTimeout(function() {
    document.querySelector('.results').innerHTML = `you found ${score} out of 5`;
    document.querySelector('.superhero2').classList.remove('batman');
  document.querySelector('.superhero5').classList.remove('shera');
  document.querySelector('.superhero6').classList.remove('elastigirl');
  document.querySelector('.superhero7').classList.remove('greenlantern');
  document.querySelector('.superhero8').classList.remove('gekko');
}, 30000);
  window.body
  document.querySelector('.batman').addEventListener('click', function() {
    document.querySelector('.batman').style.display = 'none';
    const testsound = new Audio ('assets/sounds/batmansound.mp3');
    testsound.play();
    window.body
    document.querySelector('.shera').addEventListener('click', function() {
      document.querySelector('.shera').style.display = 'none';
      const sherasound = new Audio ('assets/sounds/sherasound.mp3');
      sherasound.play();
    document.querySelector('.elastigirl').addEventListener('click', function() {
      document.querySelector('.elastigirl').style.display = 'none';
      const elastigirlsound = new Audio ('assets/sounds/elastigirlsound.mp3');
      elastigirlsound.play();
      document.querySelector('.greenlantern').addEventListener('click', function() {
      document.querySelector('.greenlantern').style.display = 'none';
      const greenlanternsound = new Audio ('assets/sounds/greenlanternsound.mp3');
      greenlanternsound.play();
      document.querySelector('.gekko').addEventListener('click', function() {
        document.querySelector('.gekko').style.display = 'none';
        const gekkosound = new Audio ('assets/sounds/gekkosound.mp3');
        gekkosound.play();
      });
        });
          });
            });
          });
});
