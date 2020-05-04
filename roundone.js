
document.querySelector('.play').addEventListener('click', function() {
  document.querySelector('.superhero1').classList.add('buzz');
  document.querySelector('.superhero3').classList.add('deadpool');
  document.querySelector('.superhero4').classList.add('wolverine');
  document.querySelector('.superhero8').classList.add('greenranger');
  document.querySelector('.level').innerHTML = 'Round 1';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Beginner';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.play').style.visibility = 'hidden';
  document.querySelector('#press').style.visibility = 'hidden';

  document.querySelector('.buzz').addEventListener('click', function() {
    document.querySelector('.superhero1').classList.remove('buzz');
    const buzzsound = new Audio ('assets/sounds/buzzsound.mp3');
    buzzsound.play();
  });
    document.querySelector('.deadpool').addEventListener('click', function() {
      document.querySelector('.superhero3').classList.remove('deadpool');
      const deadpoolsound = new Audio ('assets/sounds/deadpoolsound.mp3');
      deadpoolsound.play();
    });
    document.querySelector('.wolverine').addEventListener('click', function() {
      document.querySelector('.superhero4').classList.remove('wolverine');
      const wolverinesound = new Audio ('assets/sounds/wolverinesound.mp3');
      wolverinesound.play();
    });
    document.querySelector('.greenranger').addEventListener('click', function(greenranger) {
      document.querySelector('.superhero8').classList.remove('greenranger');
      const powerrangersound = new Audio ('assets/sounds/powerrangersound.mp3');
      powerrangersound.play();
   });
  setTimeout(function() {
  document.querySelector('.results').innerHTML = `you found ${score} out of 4`;
  document.querySelector('.play').style.display = 'none';
  document.querySelector('#press').style.visibility = 'visible';
  document.querySelector('.round2').style.display = 'flex';
  document.querySelector('.superhero1').classList.remove('buzz');
  document.querySelector('.superhero3').classList.remove('deadpool');
  document.querySelector('.superhero4').classList.remove('wolverine');
  document.querySelector('.superhero8').classList.remove('greenranger');
}, 30000);
  window.body
});


