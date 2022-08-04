(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-btn-open'),
    closeMenuBtn: document.querySelector('.header-menu-close'),
    menu: document.querySelector('.menu-mob'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();