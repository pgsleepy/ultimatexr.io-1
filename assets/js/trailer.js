import videoJs from "videojs"

var initTrailer = function() {
  var trailer = document.querySelector('#trailer');
  var video = videoJs(trailer);
  var overlay = document.querySelector('.overlay');
  var button = document.querySelector('.btn-primary');
  var containerTrailer = document.querySelector('#container-trailer');

  overlay.addEventListener('click', function(e) {
    video.pause();
    overlay.classList.remove('open');
    containerTrailer.classList.remove('open');
  });

  button.addEventListener('click', function(e) {
    video.currentTime(0);
    video.initChildren();
    overlay.classList.add('open');
    containerTrailer.classList.add('open');
    video.play();
  });
};

function initializeTrailer() {
  if (document.querySelector('body').classList.contains('kind-home')) {
    initTrailer();
  }
}

document.addEventListener("turbo:load", initializeTrailer);
