var initMobileNavigation = function() {
  var buttonOpen = document.querySelector('#menu-button-open');
  var buttonClose = document.querySelector('#menu-button-close');
  var navigation = document.querySelector('header .nav-main');

  buttonOpen.addEventListener('click', function(event) {
    navigation.classList.add('open');
  });

  buttonClose.addEventListener('click', function(event) {
    navigation.classList.remove('open');
  });
}

var initLocalNavigation = function() {
  var buttonOpen = document.querySelector('#nav-local .btn-menu');
  var buttonClose = document.querySelector('#sidebar .btn-close');
  var sidebar = document.querySelector('#sidebar');
  var overlay = document.querySelector('.overlay');

  var closeSidebar = function() {
    overlay.classList.remove('open');
    sidebar.classList.remove('open');
  }
  
  buttonOpen.addEventListener('click', function(event) {
    overlay.classList.add('open');
    sidebar.classList.add('open');
  });

  overlay.addEventListener('click', closeSidebar);
  buttonClose.addEventListener('click', closeSidebar);
  document.addEventListener("turbo:click", closeSidebar);
}

var initSidebarResize = function() {
  var sidebar = document.querySelector('#sidebar');

  var resize = function() {
    if (window.innerWidth < 992) {
      sidebar.style.removeProperty('height');
      return;
    }
    
    var scrollY = window.scrollY;
    var offsetY = 150;
    
    if (scrollY > 42) {
      offsetY = offsetY - 42;
    } else {
      offsetY = offsetY - scrollY;
    }

    sidebar.style.height = 'calc(100vh - '+ offsetY +'px)';
  }
  
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', resize);
}

var initSidebarMenu = function() {
  var sidebar = document.querySelector('#sidebar');
  var links = sidebar.querySelectorAll('li:has( > ul) > a');
  
  // Add expand/collapse functionality to links with subtree
  links.forEach(el => {
    var ul = el.parentNode.querySelector('ul');
    ul.style.height = ul.scrollHeight + 'px';
    el.addEventListener('click', function(event) {
      event.preventDefault();
      el.parentNode.classList.toggle('collapsed');
    });
  });
}

function initializeAll() {
  initMobileNavigation();
  initSidebarMenu();

  var navLocal = document.querySelector('#nav-local');
  if (navLocal !== null) {
    initLocalNavigation();
  }

  var sidebar = document.querySelector('#sidebar');
  if (sidebar !== null) {
    initSidebarResize();
  }
}

// Maintain scroll position across pages
let scrollTop = 0

addEventListener("turbo:click", ({ target }) => {
  scrollTop = sidebar.scrollTop;
})

addEventListener("turbo:render", () => {
  let sidebar = document.querySelector('#sidebar');

  if (scrollTop) {
    sidebar.scrollTo(0, scrollTop)
  }
})

// Initialize everything
document.addEventListener("turbo:load", initializeAll);
