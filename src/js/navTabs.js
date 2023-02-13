import food from "./food.js";
import gear from "./gear.js";

const tabs = document.querySelectorAll('nav li');

function select() {
  const selected = document.querySelector('.curr-tab');
  if (this !== selected) {
    tabs.forEach(tab => {
      tab.classList.toggle('curr-tab');
    });
    loadMenu(this);
  }
}

function loadMenu(tab = 'Food') {

  const currTab = tab.textContent || tab;
  const menu = document.querySelector('.menu-inventory');

  if (currTab === 'Food') {
    menu.innerHTML = food();
    selectCartItems(menu);
  } else {
    menu.innerHTML = gear();
    selectCartItems(menu);
  }
}

function selectCartItems(menu) {
  const items = menu.querySelectorAll('.menu-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected-item');
    });
  });
}

export default function navTabs() {
  tabs.forEach(tab => {
    tab.addEventListener('click', select);
  });
  loadMenu();
}