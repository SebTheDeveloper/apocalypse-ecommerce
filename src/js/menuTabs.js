import food from "./food.js";
import gear from "./gear.js";

const tabs = document.querySelectorAll('nav li');

function selectTab() {
  const selected = document.querySelector('.curr-tab');
  if (this !== selected) {
    tabs.forEach(tab => {
      tab.classList.toggle('curr-tab');
    });
    loadMenu(this);
  }
}

function loadMenu(tab = 'Food') {
  let tabTextContent = tab.textContent || tab;
  const currTab = tabTextContent.toLowerCase();
  const menu = document.querySelector('.menu-inventory');

  if (currTab === 'food') {
    menu.innerHTML = food();
  } else {
    menu.innerHTML = gear();
  }

  selectCartItems(menu);
  backToTop();
}


function backToTop() {

  const [...menuItems] = document.querySelectorAll('.menu-item');
  const lastItem = menuItems[menuItems.length - 1];
  const backToTopBtn = document.querySelector('.back-to-top');

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio === 0) {
        return;
      } else if (entry.intersectionRatio === 1) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.style.opacity = '0';
        setTimeout(() => {
          backToTopBtn.classList.remove('visible');
          backToTopBtn.style = '';
        }, 600);
      }
    });
  }, options);

  observer.observe(lastItem);
}

function selectCartItems(menu) {
  const items = menu.querySelectorAll('.menu-item');

  items.forEach(item => {
    const itemName = item.querySelector('p').textContent;
    const btn = item.querySelector('button');
    const clickForStats = item.querySelector('.click-for-stats');

    if (sessionStorage.getItem(itemName)) {
      item.classList.add('selected-item');
      btn.textContent = 'Remove from Cart'
    }
    
    btn.addEventListener('click', () => {
      item.classList.toggle('selected-item');
      if (btn.textContent === 'Add to Cart') {
        btn.textContent = 'Remove from Cart';
      } else {
        btn.textContent = 'Add to Cart';
      }
      manageSessionStorage(item);
    });

    clickForStats.addEventListener('click', () => {
      item.querySelector('.stats').style.display = 'flex';
      item.querySelector('.click-for-stats').style.display = 'none';
    });
  });
}

function manageSessionStorage(item) {
  const itemName = item.querySelector('p').textContent;
  if (sessionStorage.getItem(itemName)) {
    sessionStorage.removeItem(itemName);
  } else {
    sessionStorage.setItem(itemName, "item selected");
  }
}

export default function menuTabs() {
  tabs.forEach(tab => {
    tab.addEventListener('click', selectTab);
  });
  loadMenu();
}