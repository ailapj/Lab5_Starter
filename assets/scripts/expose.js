// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // get the elements needed
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');

  //confetti 
  const jsConfetti = new JSConfetti(); 

  //horn selection
  hornSelect.addEventListener('change', function() {
    const selected = hornSelect.value; 
    hornImage.src = `./assets/images/${selected}.svg`; 
    hornImage.alt = selected; 
    audio.src = `./assets/audio/${selected}.mp3`; 
  });

  //volumn selection 
  volumeSlider.addEventListener('input', function() {
    console.log("check 2"); 
    const volumeValue = volumeSlider.value; 
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }

    //since the audio element has a different range than 0-100 
    audio.volume = volumeValue/100; 
  }); 

  //play button
  playButton.addEventListener('click', function() {
    audio.play(); 
    
    // add confetti if party horn 
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti(); 
    }
  }); 

}