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
    ul.appendChild(tocItem);
  });
}

document.addEventListener('DOMContentLoaded', function(event) {
  if (document.querySelector('#toc') !== null) {
    initToc();
  }
});