export default function initialLoad() {

  const pickYourPoison = document.querySelector('.pick-your-poison');
  const menu = document.querySelector('.menu');

  setTimeout(() => {
    pickYourPoison.style.display = 'none';
    menu.classList.add('menu-display');
    menu.classList.add('menu-visible');
  }, 4700);

}