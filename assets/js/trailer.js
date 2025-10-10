var initTrailer = function() {
  var trailer = document.querySelector('#trailer');
  if (!trailer) {
    return;
  }

  if (typeof videojs === 'undefined') {
    return;
  }

  var video = videojs(trailer);
  var overlay = document.querySelector('.overlay');
  var button = document.querySelector('[data-trailer-trigger]');
  var containerTrailer = document.querySelector('#container-trailer');

  if (!overlay || !button || !containerTrailer) {
    return;
  }

  overlay.addEventListener('click', function() {
    video.pause();
    overlay.classList.remove('open');
    containerTrailer.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  });

  button.addEventListener('click', function() {
    video.currentTime(0);
    video.initChildren();
    overlay.classList.add('open');
    containerTrailer.classList.add('open');
    video.play();
    button.setAttribute('aria-expanded', 'true');
  });
};

function initializeTrailer() {
  if (document.querySelector('body').classList.contains('kind-home')) {
    initTrailer();
  }
}

document.addEventListener("turbo:load", initializeTrailer);
