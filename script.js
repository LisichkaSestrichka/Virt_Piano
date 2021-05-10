const keys = Array.from(document.querySelectorAll('.piano-key'));
const COLLECTION = document.querySelectorAll(".piano-key");

function remove(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('piano-key-active');
  }

function sound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  key.classList.add('piano-key-active');
  audio.currentTime = 0;
  audio.play();
}


///////////////////////////////////////////////////////


const piano = document.querySelector('.piano');

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

piano.addEventListener('mousedown', (event) => {
  if(event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    event.target.classList.add('piano-key-active');
    playAudio(src);
  }
  else if(event.target.classList.contains('piano-key')) {
    event.addEventListener("mouseup", (event) => {
    event.target.classList.remove("piano-key-active");}
  );
}});
  const startSound = (event) => {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    event.target.classList.add("piano-key-active");
    playAudio(src);
  }
  const stopSound = (event) => {
    event.target.classList.remove("piano-key-active");
  }
  const startCorrOver = () =>{
    if(event.target.classList.contains("piano-key")){
      event.target.classList.add("piano-key-active");
    }
  COLLECTION.forEach((elem) => {
    elem.addEventListener("mouseover", (startSound))
    elem.addEventListener("mouseout", (stopSound))
  })
  }
  const stopCorrOver = () =>{
  COLLECTION.forEach((elem) => {
    elem.removeEventListener("mouseover", (startSound))
    elem.removeEventListener("mouseout", (stopSound))
  })
  }

keys.forEach(key => key.addEventListener('transitionend', remove));
  window.addEventListener('keydown', sound);
  piano.addEventListener("mousedown",(startCorrOver), false);
  piano.addEventListener("mouseup",(stopCorrOver));

const FullScrin = document.querySelector(".fullscreen");
FullScrin.addEventListener('click', (button) => {
  let elem = document.querySelector("html");
  if (!document.fullscreenElement) {
    elem.requestFullscreen()
  }
  else {
    document.exitFullscreen();
  }
  button.target.classList.toggle('openfullscreen');
  function toggleFullscreen() {

}
});

const pianoKey = document.querySelectorAll(".piano-key");

const one = document.getElementById("btn-letters");
one.addEventListener("click", letter);

const two = document.getElementById("btn-notes");
two.addEventListener("click", note);

function letter() {
  one.classList.add("btn-active");
  two.classList.remove("btn-active");
  pianoKey.forEach((element) => {
    element.classList.add("piano-key-letter");
})};

function note() {
  two.classList.add("btn-active");
  one.classList.remove("btn-active");
  pianoKey.forEach((element) => {
    element.classList.remove("piano-key-letter");
})};
