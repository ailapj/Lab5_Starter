// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // get the elements needed
  const synth = window.speechSynthesis;
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const faceImg = document.querySelector('#explore img');

  let voices = [];

  // load voices on page load
  function loadVoices() {
    voices = synth.getVoices();

    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  synth.onvoiceschanged = loadVoices;

  // Speak on 'press to talk' click
  button.addEventListener('click', function () {
    const speak = new SpeechSynthesisUtterance(textInput.value);

    if (voiceSelect.value !== "select") {
      speak.voice = voices[voiceSelect.value];
    }

    //change face to talking 
    speak.onstart = function () {
      faceImg.src = "assets/images/smiling-open.png";
    };

    //change face back to smiling once audio ends
    speak.onend = function () {
      faceImg.src = "assets/images/smiling.png";
    };

    synth.speak(speak);
  });

}