import 'bootstrap';
import './css/style.css';
import { Home, Menu, Location } from './js/header';
import { element } from './js/mission';
import { MenuEl } from './js/menu';
import { Address } from './js/location';
import footer from './js/footer';

window.onload = function () {
  if (Home) {
    Home.addEventListener('click', function01);
  }
};

window.onload = function () {
  if (Menu) {
    Menu.addEventListener('click', function02);
  }
};

window.onload = function () {
  if (Location) {
    Location.addEventListener('click', function03);
  }
};

function function01(e) {
  element.classList.remove('hide');
  MenuEl.classList.add('hide');
  Address.classList.add('hide');
  e.preventDefault();
}

function function02(e) {
  element.classList.add('hide');
  MenuEl.classList.remove('hide');
  Address.classList.add('hide');
  e.preventDefault();
}

function function03(e) {
  element.classList.add('hide');
  MenuEl.classList.add('hide');
  Address.classList.remove('hide');
  e.preventDefault();
}
