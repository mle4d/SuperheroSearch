document.querySelector('.play').addEventListener('click', function() {
  document.querySelector('.block1').innerHTML = '<img class="superhero" src="assets/superheros/Buzz.png">';
  document.querySelector('.level').innerHTML = 'Level 1';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.play').style.background = 'url(assets/go.png) center no-repeat';
  document.querySelector('.play').style.backgroundSize = '80%';
  window.body
});