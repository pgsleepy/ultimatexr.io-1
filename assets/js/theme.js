import { ThemeManager } from "components/theme_manager";

const rootElement = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  rootElement.classList.add('theme-dark');
} else if (savedTheme === 'light') {
  rootElement.classList.remove('theme-dark');
}

let themeToggleButtonElement = document.querySelector('[data-theme-toggle]');
const themeManager = new ThemeManager(themeToggleButtonElement);
themeManager.init();

document.addEventListener("turbo:load", () => {
  const refreshedToggle = document.querySelector('[data-theme-toggle]');
  themeManager.setToggleButtonElement(refreshedToggle);
});
