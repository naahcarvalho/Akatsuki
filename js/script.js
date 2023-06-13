var audio = document.getElementById("backgroundVideo");
var isPlaying = false;

function toggleVideo() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
}

