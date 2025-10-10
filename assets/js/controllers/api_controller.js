import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    if (!this.element.classList.contains("type-api")) {
      return;
    }

    this.decorateSidebarLinks();
    this.markContentAsLoaded();
  }

  decorateSidebarLinks() {
    const links = this.element.querySelectorAll("#content .sidebar li a");

    links.forEach((link) => {
      if (link.dataset.apiDecorated === "true") {
        return;
      }

      const match = link.textContent.match(/\s(namespace)$/i);
      if (!match) {
        return;
      }

      const label = match[1].trim();
      if (!label) {
        return;
      }

      const spanClass = `type-${label.toLowerCase()}`;
      if (link.querySelector(`.${spanClass}`)) {
        link.dataset.apiDecorated = "true";
        return;
      }

      link.textContent = link.textContent.replace(/\s(namespace)$/i, "");

      const badge = document.createElement("span");
      badge.className = spanClass;
      badge.textContent = label;

      link.append(" ", badge);
      link.dataset.apiDecorated = "true";
    });
  }

  markContentAsLoaded() {
    const content = this.element.querySelector("#content");
    if (content) {
      content.classList.add("loaded");
    }
  }
}
