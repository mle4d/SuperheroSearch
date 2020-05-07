document.querySelector('.round6').addEventListener('click', function() {
  document.querySelector('.superhero1').style.display = 'flex';
  document.querySelector('.superhero1').classList.add('bumblebee');
  document.querySelector('.superhero2').style.display = 'flex';
  document.querySelector('.superhero2').classList.add('captainamerica');
  document.querySelector('.superhero3').style.display = 'flex';
  document.querySelector('.superhero3').classList.add('storm');
  document.querySelector('.superhero4').style.display = 'flex';
  document.querySelector('.superhero4').classList.add('catnoir');
  document.querySelector('.superhero5').style.display = 'flex';
  document.querySelector('.superhero5').classList.add('rocketraccoon');
  document.querySelector('.superhero6').style.display = 'flex';
  document.querySelector('.superhero6').classList.add('rogue');
  document.querySelector('.superhero7').style.display = 'flex';
  document.querySelector('.superhero7').classList.add('spiderman');
  document.querySelector('.superhero8').style.display = 'flex';
  document.querySelector('.superhero8').classList.add('zuma');
  document.querySelector('.superhero9').style.display = 'flex';
  document.querySelector('.superhero9').classList.add('thor');
  document.querySelector('.level').innerHTML = 'Round 6';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Super Hard';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round6').style.visibility = 'hidden';
  document.querySelector('#press').style.visibility = 'hidden';

  document.querySelector('.bumblebee').addEventListener('click', function() {
    document.querySelector('.bumblebee').style.display = 'none';
    const bumblebeesound = new Audio ('assets/sounds/bumblebeesound.mp3');
    bumblebeesound.play();
  });
  document.querySelector('.captainamerica').addEventListener('click', function() {
    document.querySelector('.captainamerica').style.display = 'none';
    const captainamericasound = new Audio ('assets/sounds/captainamericasound.mp3');
    captainamericasound.play();
  });
  document.querySelector('.storm').addEventListener('click', function() {
    document.querySelector('.storm').style.display = 'none';
    const stormsound = new Audio ('assets/sounds/stormsound.mp3');
    stormsound.play();
  });
  document.querySelector('.catnoir').addEventListener('click', function() {
    document.querySelector('.catnoir').style.display = 'none';
    const catnoirsound = new Audio ('assets/sounds/catnoirsound.mp3');
    catnoirsound.play();
  });
  document.querySelector('.rocketraccoon').addEventListener('click', function() {
    document.querySelector('.rocketraccoon').style.display = 'none';
    const rocketraccoonsound = new Audio ('assets/sounds/rocketraccoonsound.mp3');
    rocketraccoonsound.play();
  });
  document.querySelector('.rogue').addEventListener('click', function() {
    document.querySelector('.rogue').style.display = 'none';
    const roguesound = new Audio ('assets/sounds/roguesound.mp3');
    roguesound.play();
  });
  document.querySelector('.spiderman').addEventListener('click', function() {
    document.querySelector('.spiderman').style.display = 'none';
    const spidermansound = new Audio ('assets/sounds/spidermansound.mp3');
    spidermansound.play();
  });
  document.querySelector('.zuma').addEventListener('click', function() {
    document.querySelector('.zuma').style.display = 'none';
    const zumasound = new Audio ('assets/sounds/zumasound.mp3');
    zumasound.play();
  });
  document.querySelector('.thor').addEventListener('click', function() {
    document.querySelector('.thor').style.display = 'none';
    const thorsound = new Audio ('assets/sounds/thorsound.mp3');
    thorsound.play();
  });
  setTimeout(function() {
    document.querySelector('.round6').style.display = 'none';
    document.querySelector('.finalresults').style.display = 'flex';
    document.querySelector('#press').style.visibility = 'visible';
    document.querySelector('.finalresults').innerHTML = `you found ${wholescore} out of 40`;
    document.querySelector('.superhero1').classList.remove('bumblebee');
    document.querySelector('.superhero2').classList.remove('captainamerica');
    document.querySelector('.superhero3').classList.remove('storm');
    document.querySelector('.superhero4').classList.remove('catnoir');
    document.querySelector('.superhero5').classList.remove('rocketraccoon');
    document.querySelector('.superhero6').classList.remove('rogue');
    document.querySelector('.superhero7').classList.remove('spiderman');
    document.querySelector('.superhero8').classList.remove('zuma');
    document.querySelector('.superhero9').classList.remove('thor');
}, 30000);
  window.body
});