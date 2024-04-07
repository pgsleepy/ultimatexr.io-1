// Store references to all event listeners
const eventListeners = [];

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
  const elements = {
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
  const links = sidebar.querySelectorAll('li:has( > ul) > a');
  links.forEach(link => {
    const submenu = link.parentNode.querySelector('ul');
    const toggleSubmenu = (event) => {
      event.preventDefault();
      link.parentNode.classList.toggle('collapsed');
    };

    addEventListenerWithReference(link, 'click', toggleSubmenu);
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
