var initSidebarLinks = function() {
  var apiNavbarLinks = document.querySelectorAll('#content.api #sidebar li a');

  apiNavbarLinks.forEach(function(link) {
    link.innerHTML = link.innerHTML.replace(/\s(namespace)$/gi, function(s) {
      s = s.trim();
      return '<span class="type-'+ s.toLowerCase() +'">'+ s +'</span>';
    });
  });
}

var cleanupApiDoc = function() {
  document.querySelectorAll('p').forEach(function(el) {
    if(el.innerHTML == '&nbsp;') {
      el.remove();
    }
  });

  document.querySelector('main').innerHTML = document.querySelector('main').innerHTML.replace(/<\/table>&nbsp;/g,'</table>');
}

var showApiDoc = function() {
  document.querySelector('#content.api').classList.add('loaded');
}

document.addEventListener('DOMContentLoaded', function(event) {
  initSidebarLinks();
  //cleanupApiDoc(); // Already filtered in Hugo
  showApiDoc();
});