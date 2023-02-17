export default function initialLoad() {

  const pickYourPoison = document.querySelector('.pick-your-poison');
  const menu = document.querySelector('.menu');

  setTimeout(() => {
    pickYourPoison.style.display = 'none';
    menu.classList.add('menu-display');
    menu.classList.add('menu-visible');
  }, 4700);

  manageWalletBalance();
}

function manageWalletBalance() {
  const startingWalletBalance = '1000';
  const walletBalanceSpan = document.querySelector('.wallet-balance span');
  const walletBalanceTop = document.querySelector('.wallet-balance-top');

  if (sessionStorage.getItem('walletBalance')) {
    walletBalanceSpan.textContent = `$${sessionStorage.getItem('walletBalance')}`;
    walletBalanceTop.textContent = `$${sessionStorage.getItem('walletBalance')}`;
    return;
  } else {
    sessionStorage.setItem('walletBalance', startingWalletBalance);
    walletBalanceSpan.textContent = `$${startingWalletBalance}`;
    walletBalanceTop.textContent = `$${startingWalletBalance}`;
  }
}