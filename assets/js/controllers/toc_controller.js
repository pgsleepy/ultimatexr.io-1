import { Controller } from "@hotwired/stimulus";

const TOC_ID = "toc";

export default class extends Controller {
  connect() {
    this.headings = this.collectHeadings();
    this.visibleHeadings = new Set();
    this.tocLinks = new Map();
    this.currentActiveId = null;
    this.observer = null;
    this.handleTocClick = (event) => this.onTocClick(event);

    if (this.headings.length === 0) {
      this.removeExistingToc();
      return;
    }

    this.ensureHeadingIds();
    this.tocElement = this.renderToc();

    if (this.tocElement) {
      this.tocElement.addEventListener("click", this.handleTocClick);
    }

    this.observeHeadings();
    this.updateActiveHeading();
  }

  disconnect() {
    this.cleanupObserver();

    if (this.tocElement) {
      this.tocElement.removeEventListener("click", this.handleTocClick);
      this.tocElement = null;
    }

    this.tocLinks.clear();
    this.visibleHeadings.clear();
  }

  collectHeadings() {
    return Array.from(document.querySelectorAll("#content h2"));
  }

  ensureHeadingIds() {
    this.headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = this.generateIdFromHeading(heading);
      }
    });
  }

  generateIdFromHeading(heading) {
    const baseId = heading.textContent
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "section";

    let candidate = baseId;
    let suffix = 1;

    while (document.getElementById(candidate)) {
      candidate = `${baseId}-${suffix++}`;
    }

    return candidate;
  }

  renderToc() {
    const container = this.element;
    if (!container) {
      return null;
    }

    let toc = container.querySelector(`#${TOC_ID}`);
    if (!toc) {
      toc = document.createElement("aside");
      toc.id = TOC_ID;
      container.prepend(toc);
    }

    const heading = document.createElement("h3");
    heading.textContent = "On this page";

    const list = document.createElement("ul");
    this.tocLinks.clear();

    this.headings.forEach((headingEl) => {
      const id = headingEl.id;
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      const title = headingEl.textContent.trim();

      link.href = `${window.location.pathname}#${id}`;
      link.title = title;
      link.textContent = title;

      listItem.appendChild(link);
      list.appendChild(listItem);
      this.tocLinks.set(id, link);
    });

    toc.replaceChildren(heading, list);
    return toc;
  }

  observeHeadings() {
    this.cleanupObserver();

    if (this.headings.length === 0) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            this.visibleHeadings.add(entry.target);
          } else {
            this.visibleHeadings.delete(entry.target);
          }
        });

        this.updateActiveHeading();
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 1],
      }
    );

    this.headings.forEach((heading) => this.observer.observe(heading));
  }

  updateActiveHeading() {
    if (this.headings.length === 0) {
      return;
    }

    let activeHeading = null;

    for (const heading of this.headings) {
      if (this.visibleHeadings.has(heading)) {
        activeHeading = heading;
        break;
      }
    }

    if (!activeHeading) {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
      for (const heading of this.headings) {
        if (heading.offsetTop <= scrollPosition + window.innerHeight / 2) {
          activeHeading = heading;
        } else {
          break;
        }
      }
    }

    if (!activeHeading) {
      activeHeading = this.headings[0];
    }

    this.highlightLink(activeHeading.id);
  }

  highlightLink(activeId) {
    if (this.currentActiveId === activeId) {
      return;
    }

    this.currentActiveId = activeId;

    this.tocLinks.forEach((link, id) => {
      const listItem = link.parentElement;
      if (!listItem) {
        return;
      }

      if (id === activeId) {
        listItem.classList.add("active");
      } else {
        listItem.classList.remove("active");
      }
    });
  }

  onTocClick(event) {
    const anchor = event.target.closest("a");
    if (!anchor) {
      return;
    }

    const targetId = anchor.hash.replace(/^#/, "");
    if (!targetId) {
      return;
    }

    this.highlightLink(targetId);
  }

  cleanupObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  removeExistingToc() {
    const existing = this.element.querySelector(`#${TOC_ID}`);
    if (existing) {
      existing.remove();
    }
  }
}
