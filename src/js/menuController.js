export default function loadMenu(tab = 'Food') {
  const currTab = tab.textContent || tab;
  const menu = document.querySelector('.menu-inventory');

  if (currTab === 'Food') {
    menu.innerHTML = food();
  } else {
    menu.innerHTML = gear();
  }
}

function food() {
  return `
  food
  `
}

function gear() {
  return `
  <div class="menu-item odd">
    <p>Banshee</p>
    <img src="assets/images/banshee.png" id="menu-image">
  </div>
  <div class="menu-item even">
    <img src="assets/images/flame-thrower.png" id="menu-image">
    <p>Flamethrower</p>
  </div>
  `
}