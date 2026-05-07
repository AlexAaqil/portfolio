// Mobile menu functionality
const menuBtn = document.querySelector('[data-mobile-menu-btn]');
const navLinks = document.querySelector('[data-nav-links]');

function toggleMenu() {
  if (!menuBtn || !navLinks) return;
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!isExpanded));
  navLinks.classList.toggle('active');
  document.body.classList.toggle('nav-menu-open');
}

function closeMenu() {
  if (!menuBtn || !navLinks) return;
  menuBtn.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('active');
  document.body.classList.remove('nav-menu-open');
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', toggleMenu);
  
  const links = navLinks.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });
}