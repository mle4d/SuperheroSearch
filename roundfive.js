document.querySelector('.round5').addEventListener('click', function() {
  document.querySelector('.superhero1').style.display = 'flex';
  document.querySelector('.superhero1').classList.add('aquaman');
  document.querySelector('.superhero2').style.display = 'flex';
  document.querySelector('.superhero2').classList.add('blackwidow');
  document.querySelector('.superhero3').style.display = 'flex';
  document.querySelector('.superhero3').classList.add('hulk');
  document.querySelector('.superhero4').style.display = 'flex';
  document.querySelector('.superhero4').classList.add('megazord');
  document.querySelector('.superhero6').style.display = 'flex';
  document.querySelector('.superhero6').classList.add('shuri');
  document.querySelector('.superhero7').style.display = 'flex';
  document.querySelector('.superhero7').classList.add('skye');
  document.querySelector('.superhero8').style.display = 'flex';
  document.querySelector('.superhero8').classList.add('groot');
  document.querySelector('.superhero9').style.display = 'flex';
  document.querySelector('.superhero9').classList.add('wasp');
  document.querySelector('.level').innerHTML = 'Round 5';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Hard';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round5').style.visibility = 'hidden';
  document.querySelector('#press').style.visibility = 'hidden';

  document.querySelector('.aquaman').addEventListener('click', function() {
    document.querySelector('.aquaman').style.display = 'none';
    const aquamansound = new Audio ('assets/sounds/aquamansound.mp3');
    aquamansound.play();
  });
  document.querySelector('.blackwidow').addEventListener('click', function() {
    document.querySelector('.blackwidow').style.display = 'none';
    const blackwidowsound = new Audio ('assets/sounds/blackwidowsound.m4a');
    blackwidowsound.play();
  });
  document.querySelector('.hulk').addEventListener('click', function() {
    document.querySelector('.hulk').style.display = 'none';
    const hulksound = new Audio ('assets/sounds/hulksound.mp3');
    hulksound.play();
  });
  document.querySelector('.megazord').addEventListener('click', function() {
    document.querySelector('.megazord').style.display = 'none';
    const powerrangersound = new Audio ('assets/sounds/powerrangersound.mp3');
    powerrangersound.play();
  });
  document.querySelector('.shuri').addEventListener('click', function() {
    document.querySelector('.shuri').style.display = 'none';
    const shurisound = new Audio ('assets/sounds/shurisound.mp3');
    shurisound.play();
  });
  document.querySelector('.skye').addEventListener('click', function() {
    document.querySelector('.skye').style.display = 'none';
    const skyesound = new Audio ('assets/sounds/skyesound.mp3');
    skyesound.play();
  });
  document.querySelector('.groot').addEventListener('click', function() {
    document.querySelector('.groot').style.display = 'none';
    const grootsound = new Audio ('assets/sounds/grootsound.mp3');
    grootsound.play();
  });
  document.querySelector('.wasp').addEventListener('click', function() {
    document.querySelector('.wasp').style.display = 'none';
    const waspsound = new Audio ('assets/sounds/waspsound.mp3');
    waspsound.play();
  });
  setTimeout(function() {
    document.querySelector('.round5').style.display = 'none';
    document.querySelector('.round6').style.display = 'flex';
    document.querySelector('#press').style.visibility = 'visible';
    document.querySelector('.results').innerHTML = `you found ${score} out of 8`;
    document.querySelector('.superhero1').classList.remove('aquaman');
    document.querySelector('.superhero2').classList.remove('blackwidow');
    document.querySelector('.superhero3').classList.remove('hulk');
    document.querySelector('.superhero4').classList.remove('megazord');
    document.querySelector('.superhero6').classList.remove('shuri');
    document.querySelector('.superhero7').classList.remove('skye');
    document.querySelector('.superhero8').classList.remove('groot');
    document.querySelector('.superhero9').classList.remove('wasp');
}, 30000);
  window.body
});