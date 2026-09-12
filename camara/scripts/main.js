// Ano do Copyright
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Data da Última Modificação
const lastModifiedSpan = document.getElementById('last-modified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// Menu Hambúrguer Responsivo
const menuBtn = document.getElementById('menu-btn');
const primaryNav = document.getElementById('primary-nav');

if (menuBtn && primaryNav) {
  menuBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    const isOpen = primaryNav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });
}