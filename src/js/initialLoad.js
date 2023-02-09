export default function initialLoad() {

  const pickYourPoison = document.querySelector('.pick-your-poison');
  const menu = document.querySelector('.menu');

  setTimeout(() => {
    pickYourPoison.style.display = 'none';
    menu.style.display = 'grid';
  }, 3200);

}