import { Controller } from "@hotwired/stimulus";

const BREAKPOINT = 992;
const OFFSET_BASE = 150;
const SCROLL_COMPENSATION = 42;

export default class extends Controller {
  connect() {
    this.savedScrollTop = this.element.scrollTop;
    this.hasScrolledToActive = false;

    this.handleClick = (event) => this.onClick(event);
    this.handleResize = () => this.updateHeight();
    this.handleScroll = () => this.updateHeight();
    this.handleTurboClick = () => this.rememberScrollPosition();
    this.handleTurboRender = () => this.restoreScrollPosition();

    this.element.addEventListener("click", this.handleClick);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("turbo:click", this.handleTurboClick);
    document.addEventListener("turbo:render", this.handleTurboRender);

    this.updateHeight();
    this.highlightActiveLink({ scrollIntoView: true });
  }

  disconnect() {
    this.element.removeEventListener("click", this.handleClick);
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("turbo:click", this.handleTurboClick);
    document.removeEventListener("turbo:render", this.handleTurboRender);
  }

  onClick(event) {
    const link = event.target.closest("a");
    if (!link || !this.element.contains(link) || link.classList.contains("btn-close")) {
      return;
    }

    const listItem = link.closest("li");
    if (!listItem) {
      return;
    }

    const submenu = this.findSubmenuWrapper(listItem);
    if (!submenu) {
      return;
    }

    event.preventDefault();
    listItem.classList.toggle("collapsed");
  }

  updateHeight() {
    if (!this.element) {
      return;
    }

    if (window.innerWidth < BREAKPOINT) {
      this.element.style.removeProperty("height");
      return;
    }

    const offsetY =
      window.scrollY > SCROLL_COMPENSATION
        ? OFFSET_BASE - SCROLL_COMPENSATION
        : OFFSET_BASE - window.scrollY;

    this.element.style.height = `calc(100vh - ${offsetY}px)`;
  }

  highlightActiveLink({ scrollIntoView = false } = {}) {
    const links = Array.from(this.element.querySelectorAll("li > a")).filter(
      (link) => !link.classList.contains("btn-close")
    );

    const currentHref = this.normalizedUrl(window.location.href);
    let activeLink = null;

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (this.shouldSkipLink(href)) {
        link.classList.remove("active");
        return;
      }

      const isActive = this.normalizedUrl(link.href) === currentHref;
      link.classList.toggle("active", isActive);
      if (isActive) {
        activeLink = link;
        this.expandAncestors(link);
      }
    });

    if (activeLink && scrollIntoView && !this.hasScrolledToActive) {
      this.scrollLinkIntoView(activeLink);
      this.hasScrolledToActive = true;
    }
  }

  expandAncestors(link) {
    let parent = link.parentElement;

    while (parent && parent !== this.element) {
      if (parent.classList.contains("collapsed")) {
        parent.classList.remove("collapsed");
      }
      parent = parent.parentElement;
    }
  }

  scrollLinkIntoView(link) {
    const container = this.element;
    if (!container) {
      return;
    }

    const listRoot = link.closest(".sidebar ul");
    const offsetTop = listRoot ? listRoot.offsetTop - 40 : link.offsetTop - 40;
    const targetTop = Math.max(offsetTop, 0);

    if (Math.abs(container.scrollTop - targetTop) <= 1) {
      return;
    }

    const behavior =
      container.scrollHeight > container.clientHeight ? "smooth" : "auto";
    container.scrollTo({ top: targetTop, behavior });
  }

  rememberScrollPosition() {
    this.savedScrollTop = this.element.scrollTop;
  }

  restoreScrollPosition() {
    if (typeof this.savedScrollTop === "number") {
      this.element.scrollTop = this.savedScrollTop;
    }

    this.highlightActiveLink();
  }

  findSubmenuWrapper(listItem) {
    return listItem.querySelector(":scope > .wrapper");
  }

  normalizedUrl(rawUrl) {
    try {
      const url = new URL(rawUrl, window.location.origin);
      const pathname = url.pathname.replace(/\/$/, "");
      return `${url.origin}${pathname}`;
    } catch (error) {
      return rawUrl;
    }
  }

  shouldSkipLink(href) {
    const trimmed = href.trim().toLowerCase();
    return (
      trimmed === "" ||
      trimmed === "#" ||
      trimmed.startsWith("javascript:")
    );
  }
}
