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
    <div class="description">
      <p>Banshee</p>
      <p>$5000</p>
      <button>Add to Cart</button>
    </div>
    <img src="assets/images/banshee.png" id="menu-image">
  </div>
  <div class="menu-item even">
    <img src="assets/images/flame-thrower.png" id="menu-image">
    <div class="description">
      <p>Flamethrower</p>
      <p>$800</p>
      <button>Add to Cart</button>
    </div>
  </div>
  <div class="menu-item odd">
    <div class="description">
      <p>Ray Gun</p>
      <p>$2000</p>
      <button>Add to Cart</button>
    </div>
    <img src="assets/images/ray-gun.png" id="menu-image">
  </div>
  <div class="menu-item even">
    <img src="assets/images/robo-dog.webp" id="menu-image">
    <div class="description">
      <p>Robo Dog Companion</p>
      <p>$1500</p>
      <button>Add to Cart</button>
    </div>
  </div>
  `

}