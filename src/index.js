import './styles.css';
import array from './menu';
import menuListTemplate from './template/menu-list.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

const markUp = menuListTemplate(array);
refs.menuList.insertAdjacentHTML('beforeend', markUp);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const choiseTheme = document.querySelector('.js-switch-input');

choiseTheme.addEventListener('change', savedChangeTheme);
const themeShow = document.querySelector('body');

function defaultTheme() {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    themeShow.classList.add(Theme.DARK);
    choiseTheme.checked = true;
    themeShow.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('Theme', 'light-theme');
    themeShow.classList.add(Theme.LIGHT);
  }
}
defaultTheme();

function savedChangeTheme(event) {
  console.log(event);
  if (event.target.checked) {
    themeShow.classList.add(Theme.DARK);
    themeShow.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', 'dark-theme');
  } else if (!event.target.checked) {
    themeShow.classList.add(Theme.LIGHT);
    themeShow.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', 'light-theme');
  }
}
