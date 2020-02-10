import "./JS/change-theme"
import './styles.css';
import array from './menu';
import menuListTemplate from './template/menu-list-temp.hbs';

const refs = {
    menuList: document.querySelector('.js-menu')
}

const markUp = menuListTemplate(array);
refs.menuList.insertAdjacentHTML('beforeend', markUp)

localStorage.setItem('theme', 'light')
