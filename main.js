function play(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  audio.play();
  audio.currentTime = 0;

  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 50);
}
window.addEventListener("keydown", play);
