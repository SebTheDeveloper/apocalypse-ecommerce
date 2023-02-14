export default function initialLoad() {

  const pickYourPoison = document.querySelector('.pick-your-poison');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');

  setTimeout(() => {
    pickYourPoison.style.display = 'none';
    menu.classList.add('menu-visible')
    body.style.overflowY = 'visible';
  }, 4500);

}