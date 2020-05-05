document.querySelector('.round3').addEventListener('click', function() {
  document.querySelector('.superhero1').style.display = 'flex';
  document.querySelector('.superhero1').classList.add('wonderwoman');
  document.querySelector('.superhero3').style.display = 'flex';
  document.querySelector('.superhero3').classList.add('superman');
  document.querySelector('.superhero4').style.display = 'flex';
  document.querySelector('.superhero4').classList.add('antman');
  document.querySelector('.superhero5').style.display = 'flex';
  document.querySelector('.superhero5').classList.add('raphael');
  document.querySelector('.superhero7').style.display = 'flex';
  document.querySelector('.superhero7').classList.add('baymax');
  document.querySelector('.superhero8').style.display = 'flex';
  document.querySelector('.superhero8').classList.add('blackpanther');
  document.querySelector('.level').innerHTML = 'Round 3';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Medium';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round3').style.visibility = 'hidden';
  document.querySelector('#press').style.visibility = 'hidden';

  document.querySelector('.wonderwoman').addEventListener('click', function() {
    document.querySelector('.wonderwoman').style.display = 'none';
    const wonderwomansound = new Audio ('assets/sounds/wonderwomansound.mp3');
    wonderwomansound.play();
  });
  document.querySelector('.superman').addEventListener('click', function() {
    document.querySelector('.superman').style.display = 'none';
    const supermansound = new Audio ('assets/sounds/supermansound.mp3');
    supermansound.play();
  });
  document.querySelector('.antman').addEventListener('click', function() {
    document.querySelector('.antman').style.display = 'none';
    const antmansound = new Audio ('assets/sounds/antmansound.mp3');
    antmansound.play();
  });
  document.querySelector('.raphael').addEventListener('click', function() {
    document.querySelector('.raphael').style.display = 'none';
    const raphaelsound = new Audio ('assets/sounds/raphaelsound.mp3');
    raphaelsound.play();
  });
  document.querySelector('.baymax').addEventListener('click', function() {
    document.querySelector('.baymax').style.display = 'none';
    const baymaxsound = new Audio ('assets/sounds/baymaxsound.mp3');
    baymaxsound.play();
  });
  document.querySelector('.blackpanther').addEventListener('click', function() {
    document.querySelector('.blackpanther').style.display = 'none';
    const blackpanthersound = new Audio ('assets/sounds/blackpanthersound.mp3');
    blackpanthersound.play();
  });
  setTimeout(function() {
    document.querySelector('.round3').style.display = 'none';
    document.querySelector('.round4').style.display = 'flex';
    document.querySelector('#press').style.visibility = 'visible';
    document.querySelector('.results').innerHTML = `you found ${score} out of 6`;
    document.querySelector('.superhero1').classList.remove('wonderwoman');
    document.querySelector('.superhero3').classList.remove('superman');
    document.querySelector('.superhero4').classList.remove('antman');
    document.querySelector('.superhero5').classList.remove('raphael');
    document.querySelector('.superhero7').classList.remove('baymax');
    document.querySelector('.superhero8').classList.remove('blackpanther');
}, 30000);
  window.body
});