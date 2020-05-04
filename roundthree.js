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
  document.querySelector('.results').innerHTML = 'Difficulty Level: intermediate';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round3').classList.toggle('go');
  document.querySelector('#press').style.display = 'none';
  setTimeout(function() {
    document.querySelector('.results').innerHTML = `you found ${score} out of 6`;
    document.querySelector('.round3').style.display = 'none';
    document.querySelector('.round4').style.display = 'flex';
    document.querySelector('.superhero1').classList.remove('wonderwoman');
    document.querySelector('.superhero3').classList.remove('superman');
    document.querySelector('.superhero4').classList.remove('antman');
    document.querySelector('.superhero5').classList.remove('raphael');
    document.querySelector('.superhero7').classList.remove('baymax');
    document.querySelector('.superhero8').classList.remove('blackpanther');
}, 30000);
  window.body
});