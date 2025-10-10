import { Controller } from "@hotwired/stimulus";

const STORAGE_KEY = "theme";
const DARK_CLASS = "theme-dark";

export default class extends Controller {
  static targets = ["toggle"];

  connect() {
    this.rootElement = document.documentElement;

    this.applySavedTheme();
    this.updateToggleState();
  }

  toggle(event) {
    if (event) {
      event.preventDefault();
    }

    const nextTheme = this.currentTheme() === "dark" ? "light" : "dark";
    this.applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    this.updateToggleState();
    this.blurToggle();
  }

  applySavedTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "dark" || savedTheme === "light") {
      this.applyTheme(savedTheme);
    } else {
      this.updateToggleState();
    }
  }

  applyTheme(theme) {
    if (!this.rootElement) {
      return;
    }

    if (theme === "dark") {
      this.rootElement.classList.add(DARK_CLASS);
    } else {
      this.rootElement.classList.remove(DARK_CLASS);
    }
  }

  currentTheme() {
    return this.rootElement.classList.contains(DARK_CLASS) ? "dark" : "light";
  }

  updateToggleState() {
    if (!this.hasToggleTarget) {
      return;
    }

    const isDark = this.currentTheme() === "dark";
    this.toggleTarget.setAttribute("aria-pressed", String(isDark));
  }

  blurToggle() {
    if (this.hasToggleTarget) {
      this.toggleTarget.blur();
    }
  }
}
