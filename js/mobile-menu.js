// RUS

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   const mobileBtnClose = document.querySelector('[data-menu-close]');

//   menuBtnRef.addEventListener('click', () => {
//     mobileMenuRef.classList.toggle('is-open');
//   });

//   mobileBtnClose.addEventListener('click', () => {
//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

// RUS

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-fixed');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
