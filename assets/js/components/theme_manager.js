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
    const theme = this.rootElement.classList.contains('theme-dark') ? 'light' : 'dark';

    event.preventDefault();
    localStorage.setItem('theme', theme);
    this.rootElement.classList.toggle('theme-dark');
    event.target.closest('a').blur();
  }

  applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.rootElement.classList.add('theme-dark');
    }
  }

  addEventListeners() {
    this.toggleButtonElement.addEventListener('click', this.toggleTheme);
  }

  removeEventListeners() {
    this.toggleButtonElement.removeEventListener('click', this.toggleTheme);
  }

  reset() {
    this.removeEventListeners();
  }

  setToggleButtonElement(toggleButtonElement) {
    this.reset();
    this.toggleButtonElement = toggleButtonElement;
    this.addEventListeners();
  }
}
