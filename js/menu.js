(() => {
  const refs = {
    openMenulBtn: document.querySelector(".header-btn__mob"),
    closeMenuBtn: document.querySelector(".header-menu_close"),
      menu: document.querySelector(".menu-mob"),
    body:document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.menu.classList.toggle("no-scroll");
  }
})();