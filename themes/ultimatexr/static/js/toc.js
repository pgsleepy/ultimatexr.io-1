var initToc = function() {
  var headings = document.querySelectorAll('#content h2');
  var toc = document.querySelector('#toc');

  if (toc === null || headings.length === 0) {
    return;
  }

  var ul = document.createElement('ul');
  ul.innerHTML = '<li class="title">On this page</li>';
  toc.appendChild(ul);

  headings.forEach(function(h) {
    var tocItem = document.createElement('li');
    var targetId = h.getAttribute('id') || h.textContent.replace(/\s+/g, '-').toLowerCase();
    h.id = targetId; // Ensure the heading has an ID

    tocItem.innerHTML = '<a href="' + location.pathname + '#' + targetId + '">' + h.textContent + '</a>';
    ul.appendChild(tocItem);
  });

  // Function to highlight the active section
  var highlightActiveSection = function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var currentSectionId;

    headings.forEach(function(h) {
      if (h.offsetTop <= scrollPosition + window.innerHeight / 4) {
        var hId = h.getAttribute('id');
        if (hId) { // Check if the heading has an ID
          currentSectionId = hId;
        }
      }
    });

    if (currentSectionId) {
      toc.querySelectorAll('li a').forEach(function(link) {
        var listItem = link.parentElement;
        listItem.classList.remove('active');
        if (link.getAttribute('href') === location.pathname + '#' + currentSectionId) {
          listItem.classList.add('active');
        }
      });
    }
  };

  // Highlight the active section on scroll
  document.addEventListener('scroll', highlightActiveSection);

  // Highlight the active section initially
  highlightActiveSection();
};

function initializeToc() {
  if (document.querySelector('#toc') !== null) {
    initToc();
  }
}

document.addEventListener("turbo:load", initializeToc);
