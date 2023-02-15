const foodItems = [
  {
    name: 'Box of Canned Goods',
    price: '$50',
    src: 'assets/images/box-of-canned-goods.png'
  },
  {
    name: 'Tuna Sandwich',
    price: '$7',
    src: 'assets/images/tuna-sandwich.png'
  },
  {
    name: 'Water Jug (5 Gal)',
    price: '$20',
    src: 'assets/images/water-jug-5-gallon.png'
  },
  {
    name: 'Coffee Beans',
    price: '$12',
    src: 'assets/images/coffee-beans.png'
  },
  {
    name: 'Bottle of Whiskey',
    price: '$27',
    src: 'assets/images/whiskey-bottle.png'
  },
  {
    name: 'Red Apple',
    price: '$2',
    src: 'assets/images/red-apple.png'
  },
  {
    name: 'Old Chinese Food',
    price: '$9',
    src: 'assets/images/chinese-food.png'
  },
  {
    name: 'Coconut',
    price: '$7',
    src: 'assets/images/coconut.png'
  },
  {
    name: 'Bowl of Rice',
    price: '$4',
    src: 'assets/images/bowl-of-rice.png'
  },
  {
    name: 'Canned Mystery Food',
    price: '$5',
    src: 'assets/images/canned-mystery-food.png'
  },
  {
    name: 'Dog Food Bites',
    price: '$3',
    src: 'assets/images/dog-food-bites.png'
  }
];

function createMarkup() {
  let htmlBuffer = '';
  
  for (let i = 0; i < foodItems.length; i ++) {
    const name = foodItems[i].name;
    const price = foodItems[i].price;
    const src = foodItems[i].src;

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

export default function food() {
  return createMarkup();
}