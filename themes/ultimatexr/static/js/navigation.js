// Store references to all elements and event listeners
let elements = {};
let eventListeners = [];
let initialized = false;

document.addEventListener("turbo:load", cleanup);
document.addEventListener("turbo:load", initialize);

function addEventListenerWithReference(element, event, handler) {
  element.addEventListener(event, handler);
  eventListeners.push({ element, event, handler });
}

function removeEventListeners() {
  eventListeners.forEach(({ element, event, handler }) => {
    element.removeEventListener(event, handler);
  });
  
  eventListeners.length = 0; // Clear the array after removing all listeners
}

function initialize() {
  elements = {
    buttonOpenMobile: document.querySelector('#menu-button-open'),
    buttonCloseMobile: document.querySelector('#menu-button-close'),
    navigation: document.querySelector('header .nav-main'),
    buttonOpenLocal: document.querySelector('#nav-local .btn-menu'),
    buttonCloseLocal: document.querySelector('#sidebar .btn-close'),
    sidebar: document.querySelector('#sidebar'),
    overlay: document.querySelector('.overlay'),
  };

  initMobileNavigation(elements);
  initSidebarMenu(elements.sidebar);

  if (elements.sidebar) {
    initSidebarResize(elements.sidebar);
  }

  const scrollManager = maintainScrollPosition(elements.sidebar);
  addEventListenerWithReference(document, "turbo:click", scrollManager.saveScroll);
  addEventListenerWithReference(document, "turbo:render", scrollManager.restoreScroll);

  if (elements.buttonOpenLocal && elements.overlay) {
    initLocalNavigation(elements);
  }

  initialized = true;
}

function cleanup() {
  removeEventListeners();
}

function initMobileNavigation({ buttonOpenMobile, buttonCloseMobile, navigation }) {
  addEventListenerWithReference(buttonOpenMobile, 'click', () => navigation.classList.add('open'));
  addEventListenerWithReference(buttonCloseMobile, 'click', () => navigation.classList.remove('open'));
}

function initLocalNavigation({ buttonOpenLocal, buttonCloseLocal, sidebar, overlay }) {
  addEventListenerWithReference(buttonOpenLocal, 'click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  });

  addEventListenerWithReference(buttonCloseLocal, 'click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });

  addEventListenerWithReference(overlay, 'click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

function initSidebarResize(sidebar) {
  const resizeSidebar = () => {
    const breakpoint = 992;
    const offsetYBase = 150;
    const scrollCompensation = 42;

    if (window.innerWidth < breakpoint) {
      sidebar.style.removeProperty('height');
      return;
    }

    const offsetY = window.scrollY > scrollCompensation ? offsetYBase - scrollCompensation : offsetYBase - window.scrollY;
    sidebar.style.height = `calc(100vh - ${offsetY}px)`;
  };

  resizeSidebar();
  addEventListenerWithReference(window, 'resize', resizeSidebar);
  addEventListenerWithReference(window, 'scroll', resizeSidebar);
}

function initSidebarMenu(sidebar) {
  const linksWithSubmenu = sidebar.querySelectorAll('li:has( > ul) > a');
  const leafLinks = sidebar.querySelectorAll('li:not(:has( > ul)) > a');
  const currentHref = (location.protocol + '//' + location.host + location.pathname).replace(/\/$/, '');

  // Close sidebar
  elements.sidebar.classList.remove('open');

  const toggleSubmenu = (event) => {
    event.preventDefault();
    event.target.parentNode.classList.toggle('collapsed');
  };
  
  // Enable submenu toggle for links with submenus
  linksWithSubmenu.forEach(link => {
    // Force height in submenus to enable collapse animations to work
    const submenu = link.parentNode.querySelector('ul');
    submenu.style.height = submenu.scrollHeight + 'px';
    
    addEventListenerWithReference(link, 'click', toggleSubmenu);
  });

  // Open subtree for active link
  leafLinks.forEach(link => {
    link.classList.remove('active');
    
    if(link.href == currentHref) {
      link.classList.add('active');

      let parentNode = link.parentNode
      
      while (parentNode) {
        if(parentNode.tagName.toLowerCase() == 'li' && parentNode.classList.contains('collapsed')) {
          parentNode.classList.remove('collapsed');
        }

        if (parentNode == elements.sidebar) {
          if(!initialized) {
            elements.sidebar.scrollTo({top: link.closest('#sidebar > ul').offsetTop - 40, behavior: 'smooth'});
          }
          
          break;
        }

        parentNode = parentNode.parentNode;
      }
    }
  });
}

function maintainScrollPosition(sidebar) {
  let scrollTop = 0;

  return {
    saveScroll: () => {
      scrollTop = sidebar.scrollTop;
    },
    restoreScroll: () => {
      if (scrollTop) {
        sidebar.scrollTo(0, scrollTop);
      }
    },
  };
}
