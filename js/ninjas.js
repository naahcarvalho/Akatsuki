// Selecionar todos os elementos <audio>
var audios = document.querySelectorAll("audio");
// Array para controlar o estado de reprodução de cada áudio
var isPlayingArray = new Array(audios.length).fill(false);

// Função para controlar a reprodução/pausa de um áudio específico
function toggleAudio(index) {
  var audio = audios[index];
  var isPlaying = isPlayingArray[index];

  if (isPlaying) {
    audio.pause();
    isPlayingArray[index] = false;
  } else {
    audio.play();
    isPlayingArray[index] = true;
  }
}

// Adicionar evento de clique aos botões de reprodução/pausa
var playPauseButtons = document.querySelectorAll(".play-pause-button");
playPauseButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    toggleAudio(index);
  });
});
