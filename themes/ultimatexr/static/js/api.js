var initSidebarLinks = function() {
  var apiNavbarLinks = document.querySelectorAll('body.type-api #content #sidebar li a');

  apiNavbarLinks.forEach(function(link) {
    link.innerHTML = link.innerHTML.replace(/\s(namespace)$/gi, function(s) {
      s = s.trim();
      return '<span class="type-'+ s.toLowerCase() +'">'+ s +'</span>';
    });
  });
}

var showApiDoc = function() {
  document.querySelector('body.type-api #content').classList.add('loaded');
}

document.addEventListener('DOMContentLoaded', function(event) {
  if (document.querySelector('body').classList.contains('type-api')) {
    initSidebarLinks();
    showApiDoc();
  }
});