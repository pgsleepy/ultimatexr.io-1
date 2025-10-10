export class ThemeManager {
  constructor(toggleButtonElement) {
    this.toggleButtonElement = toggleButtonElement;
    this.rootElement = document.documentElement;
  }

  init() {
    this.applySavedTheme();
    this.addEventListeners();
  }
  
  toggleTheme = (event) => {
    if (event) {
      event.preventDefault();
    }

    const theme = this.rootElement.classList.contains('theme-dark') ? 'light' : 'dark';

    localStorage.setItem('theme', theme);
    this.rootElement.classList.toggle('theme-dark');
    this.updateControlState(theme);
    if (event && event.target.closest('[data-theme-toggle]')) {
      event.target.closest('[data-theme-toggle]').blur();
    }
  }

  applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.rootElement.classList.add('theme-dark');
    } else {
      this.rootElement.classList.remove('theme-dark');
    }

    this.updateControlState(savedTheme === 'dark' ? 'dark' : 'light');
  }

  updateControlState(theme) {
    if (!this.toggleButtonElement) {
      return;
    }

    const isDark = theme === 'dark';
    this.toggleButtonElement.setAttribute('aria-pressed', isDark.toString());
  }

  addEventListeners() {
    if (!this.toggleButtonElement) {
      return;
    }

    this.toggleButtonElement.addEventListener('click', this.toggleTheme);
  }

  removeEventListeners() {
    if (!this.toggleButtonElement) {
      return;
    }

    this.toggleButtonElement.removeEventListener('click', this.toggleTheme);
  }

  reset() {
    this.removeEventListeners();
  }

  setToggleButtonElement(toggleButtonElement) {
    this.reset();
    this.toggleButtonElement = toggleButtonElement;
    this.addEventListeners();
    this.applySavedTheme();
  }
}
