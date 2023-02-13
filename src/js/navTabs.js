import loadMenu from "./menuController.js";

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

export default function navTabs() {
  tabs.forEach(tab => {
    tab.addEventListener('click', select);
  });
  loadMenu();
}