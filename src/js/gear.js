const gearItems = [
  {
    name: 'Hunting Rifle',
    price: '$275',
    src: 'assets/images/hunting-rifle.png'
  },
  {
    name: 'Ray Gun',
    price: '$1800',
    src: 'assets/images/ray-gun.png'
  },
  {
    name: 'Machete',
    price: '$45',
    src: 'assets/images/machete.png'
  },
  {
    name: 'Baseball Bat',
    price: '$20',
    src: 'assets/images/baseball-bat.png'
  },
  {
    name: '.357 Magnum Reveolver',
    price: '$650',
    src: 'assets/images/revolver.png'
  },
  {
    name: 'Molotov Cocktail',
    price: '$35',
    src: 'assets/images/molotov-cocktail.png'
  },
  {
    name: 'Gas Mask',
    price: '$150',
    src: 'assets/images/gas-mask.png'
  },
  {
    name: 'Hazmat Suit',
    price: '$600',
    src: 'assets/images/hazmat-suit.png'
  },
  {
    name: 'Banshee',
    price: '$4500',
    src: 'assets/images/banshee.png'
  },
  {
    name: 'Minigun',
    price: '$1750',
    src: 'assets/images/minigun.png'
  },
  {
    name: 'Flamethrower',
    price: '$500',
    src: 'assets/images/flame-thrower.png'
  },
  {
    name: 'Robo Dog Companion',
    price: '$1500',
    src: 'assets/images/robo-dog.png'
  },
  {
    name: 'Fidget Spinner',
    price: '$15',
    src: 'assets/images/fidget-spinner.png'
  }
];

function createMarkup() {
  let htmlBuffer = '';
  
  for (let i = 0; i < gearItems.length; i ++) {
    const name = gearItems[i].name;
    const price = gearItems[i].price;
    const src = gearItems[i].src;

    if (i % 2 === 0) {
      htmlBuffer += `
        <div class="menu-item">
        <img src="${src}" id="menu-image" loading="lazy" alt="${name}" title="${name}">
        <div class="description">
          <p>${name}</p>
          <p>${price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
    } else {
      htmlBuffer += `
        <div class="menu-item">
          <div class="description">
            <p>${name}</p>
            <p>${price}</p>
            <button>Add to Cart</button>
          </div>
          <img src="${src}" id="menu-image" loading="lazy" alt="${name}" title="${name}">
        </div> 
      `;
    }
  }

  return htmlBuffer;
}

export default function gear() {
  return createMarkup();
}