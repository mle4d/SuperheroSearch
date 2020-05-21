document.querySelector('.round4').addEventListener('click', function() {
  document.querySelector('.superhero2').style.display = 'flex';
  document.querySelector('.superhero2').classList.add('ironman');
  document.querySelector('.superhero3').style.display = 'flex';
  document.querySelector('.superhero3').classList.add('scarletwitch');
  document.querySelector('.superhero4').style.display = 'flex';
  document.querySelector('.superhero4').classList.add('gamora');
  document.querySelector('.superhero6').style.display = 'flex';
  document.querySelector('.superhero6').classList.add('jackjack');
  document.querySelector('.superhero7').style.display = 'flex';
  document.querySelector('.superhero7').classList.add('heman');
  document.querySelector('.superhero8').style.display = 'flex';
  document.querySelector('.superhero8').classList.add('captainmarvel');
  document.querySelector('.superhero9').style.display = 'flex';
  document.querySelector('.superhero9').classList.add('ladybug');
  document.querySelector('.level').innerHTML = 'Round 4';
  document.querySelector('.results').innerHTML = 'Difficulty Level: Intermediate';
  document.querySelector('.middle').style.opacity = '1';
  document.querySelector('.round4').style.visibility = 'hidden';
  document.querySelector('#press').style.visibility = 'hidden';

  document.querySelector('.ironman').addEventListener('click', function() {
    document.querySelector('.ironman').style.display = 'none';
    const ironmansound = new Audio ('assets/sounds/ironmansound.mp3');
    ironmansound.play();
  });
  document.querySelector('.scarletwitch').addEventListener('click', function() {
    document.querySelector('.scarletwitch').style.display = 'none';
    const scarletwitchsound = new Audio ('assets/sounds/scarletwitchsound.m4a');
    scarletwitchsound.play();
  });
  document.querySelector('.gamora').addEventListener('click', function() {
    document.querySelector('.gamora').style.display = 'none';
    const gamorasound = new Audio ('assets/sounds/gamorasound.mp3');
    gamorasound.play();
  });
  document.querySelector('.jackjack').addEventListener('click', function() {
    document.querySelector('.jackjack').style.display = 'none';
    const jackjacksound = new Audio ('assets/sounds/jackjacksound.mp3');
    jackjacksound.play();
  });
  document.querySelector('.heman').addEventListener('click', function() {
    document.querySelector('.heman').style.display = 'none';
    const hemansound = new Audio ('assets/sounds/hemansound.mp3');
    hemansound.play();
  });
  document.querySelector('.captainmarvel').addEventListener('click', function() {
    document.querySelector('.captainmarvel').style.display = 'none';
    const captainmarvelsound = new Audio ('assets/sounds/captainmarvelsound.m4a');
    captainmarvelsound.play();
  });
  document.querySelector('.ladybug').addEventListener('click', function() {
    document.querySelector('.ladybug').style.display = 'none';
    const ladybugsound = new Audio ('assets/sounds/ladybugsound.mp3');
    ladybugsound.play();
  });
  setTimeout(function() {
    document.querySelector('.round4').style.display = 'none';
    document.querySelector('.round5').style.display = 'flex';
    document.querySelector('#press').style.visibility = 'visible';
    document.querySelector('.results').innerHTML = `you found ${score} out of 7`;
    document.querySelector('.superhero2').classList.remove('ironman');
    document.querySelector('.superhero3').classList.remove('scarletwitch');
    document.querySelector('.superhero4').classList.remove('gamora');
    document.querySelector('.superhero6').classList.remove('jackjack');
    document.querySelector('.superhero7').classList.remove('heman');
    document.querySelector('.superhero8').classList.remove('captainmarvel');
    document.querySelector('.superhero9').classList.remove('ladybug');
}, 30000);
  window.body
});