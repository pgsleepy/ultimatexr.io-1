import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "mainNav",
    "menuOpenButton",
    "menuCloseButton",
    "sidebar",
    "overlay",
    "localOpenButton",
  ];

  connect() {
    this.resetMenus();

    this.beforeCacheHandler = () => this.resetMenus();
    this.keydownHandler = (event) => this.handleKeydown(event);

    document.addEventListener("turbo:before-cache", this.beforeCacheHandler);
    document.addEventListener("keydown", this.keydownHandler);
  }

  disconnect() {
    document.removeEventListener("turbo:before-cache", this.beforeCacheHandler);
    document.removeEventListener("keydown", this.keydownHandler);
  }

  openMainMenu(event) {
    if (event) {
      event.preventDefault();
    }

    if (this.hasMainNavTarget) {
      this.mainNavTarget.classList.add("open");
    }
  }

  closeMainMenu(event) {
    if (event) {
      event.preventDefault();
    }

    if (this.hasMainNavTarget) {
      this.mainNavTarget.classList.remove("open");
    }
  }

  openSidebar(event) {
    if (event) {
      event.preventDefault();
    }

    if (this.hasSidebarTarget) {
      this.sidebarTarget.classList.add("open");
    }

    if (this.hasOverlayTarget) {
      this.overlayTarget.dataset.navigationActive = "true";
      this.overlayTarget.classList.add("open");
    }

    if (this.hasLocalOpenButtonTarget) {
      this.localOpenButtonTarget.setAttribute("aria-expanded", "true");
    }
  }

  closeSidebar(event) {
    if (event) {
      event.preventDefault();
    }

    if (this.hasSidebarTarget) {
      this.sidebarTarget.classList.remove("open");
    }

    if (this.hasOverlayTarget) {
      delete this.overlayTarget.dataset.navigationActive;

      if (!this.overlayTarget.dataset.trailerActive) {
        this.overlayTarget.classList.remove("open");
      }
    }

    if (this.hasLocalOpenButtonTarget) {
      this.localOpenButtonTarget.setAttribute("aria-expanded", "false");
    }
  }

  toggleSidebar(event) {
    if (!this.hasSidebarTarget) {
      return;
    }

    if (this.sidebarTarget.classList.contains("open")) {
      this.closeSidebar(event);
    } else {
      this.openSidebar(event);
    }
  }

  dismissOverlay(event) {
    if (event) {
      event.preventDefault();
    }

    if (this.hasSidebarTarget && this.sidebarTarget.classList.contains("open")) {
      this.closeSidebar();
    }
  }

  handleKeydown(event) {
    if (event.defaultPrevented) {
      return;
    }

    if (event.key === "Escape") {
      this.closeSidebar();
      this.closeMainMenu();
    }
  }

  resetMenus() {
    this.closeSidebar();
    this.closeMainMenu();
  }
}
