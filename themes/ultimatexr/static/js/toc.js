var initToc = function() {
  var headings = document.querySelectorAll('#content h2');
  var toc = document.querySelector('#toc');

  if (toc === null || headings.length === 0) {
    return;
  }

  var ul = document.createElement('ul');
  ul.innerHTML = '<li class="title">On this page</li>'
  toc.appendChild(ul);

  headings.forEach(function(h) {
    var tocItem = document.createElement('li');
    var targetId = h.getAttribute('id');
    var targetEl = document.querySelector('#' + targetId)
    tocItem.innerHTML = '<a href="' + location.pathname + '#' + targetId + '">' + h.textContent + '</a>'

    tocItem.addEventListener('click', function(event) {
      event.preventDefault();
      window.scroll({
        top: targetEl.getBoundingClientRect().top - 101 + window.scrollY
      });
    });
    
    ul.appendChild(tocItem);
  });
}

document.addEventListener('DOMContentLoaded', function(event) {
  if (document.querySelector('#toc') !== null) {
    initToc();
  }
});