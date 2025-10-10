// Store references to all elements and event listeners
let elements = {};
let eventListeners = [];
let initialized = false;

document.addEventListener("turbo:load", cleanup);
document.addEventListener("turbo:load", initialize);

function addEventListenerWithReference(element, event, handler) {
  if (!element) return;
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
    buttonCloseLocal: document.querySelector('.sidebar .btn-close'),
    sidebar: document.querySelector('.sidebar'),
    overlay: document.querySelector('.overlay'),
  };

  initMobileNavigation(elements);
  initSidebarMenu(elements.sidebar);

  if (elements.sidebar) {
    initSidebarResize(elements.sidebar);
  }

  if (elements.sidebar) {
    const scrollManager = maintainScrollPosition(elements.sidebar);
    addEventListenerWithReference(document, "turbo:click", scrollManager.saveScroll);
    addEventListenerWithReference(document, "turbo:render", scrollManager.restoreScroll);
  }

  if (elements.buttonOpenLocal && elements.overlay) {
    initLocalNavigation(elements);
  }

  initialized = true;
}

function cleanup() {
  removeEventListeners();
}

function initMobileNavigation({ buttonOpenMobile, buttonCloseMobile, navigation }) {
  addEventListenerWithReference(buttonOpenMobile, 'click', () => {
    if (navigation) {
      navigation.classList.add('open');
    }
  });
  addEventListenerWithReference(buttonCloseMobile, 'click', () => {
    if (navigation) {
      navigation.classList.remove('open');
    }
  });
}

function initLocalNavigation({ buttonOpenLocal, buttonCloseLocal, sidebar, overlay }) {
  addEventListenerWithReference(buttonOpenLocal, 'click', () => {
    if (sidebar) {
      sidebar.classList.add('open');
    }
    if (overlay) {
      overlay.classList.add('open');
    }
    if (buttonOpenLocal) {
      buttonOpenLocal.setAttribute('aria-expanded', 'true');
    }
  });

  addEventListenerWithReference(buttonCloseLocal, 'click', () => {
    if (sidebar) {
      sidebar.classList.remove('open');
    }
    if (overlay) {
      overlay.classList.remove('open');
    }
    if (buttonOpenLocal) {
      buttonOpenLocal.setAttribute('aria-expanded', 'false');
    }
  });

  addEventListenerWithReference(overlay, 'click', () => {
    if (sidebar) {
      sidebar.classList.remove('open');
    }
    if (overlay) {
      overlay.classList.remove('open');
    }
    if (buttonOpenLocal) {
      buttonOpenLocal.setAttribute('aria-expanded', 'false');
    }
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
  if (!sidebar) return;
  const linksWithSubmenu = sidebar.querySelectorAll('li:has( > .wrapper) > a');
  const leafLinks = sidebar.querySelectorAll('li:not(:has( > .wrapper)) > a');
  const currentHref = (location.protocol + '//' + location.host + location.pathname).replace(/\/$/, '');

  // Close sidebar
  sidebar.classList.remove('open');

  const toggleSubmenu = (event) => {
    event.preventDefault();
    event.target.parentNode.classList.toggle('collapsed');
  };
  
  // Enable submenu toggle for links with submenus
  linksWithSubmenu.forEach(link => {
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
            elements.sidebar.scrollTo({top: link.closest('.sidebar ul').offsetTop - 40, behavior: 'smooth'});
          }
          
          break;
        }

        parentNode = parentNode.parentNode;
      }
    }
  });
}

function maintainScrollPosition(sidebar) {
  if (!sidebar) {
    return {
      saveScroll: () => {},
      restoreScroll: () => {}
    };
  }
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
