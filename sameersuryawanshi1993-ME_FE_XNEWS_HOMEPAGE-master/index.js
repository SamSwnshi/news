const nav = document.getElementById('nav');
const menuButton = document.getElementById('menu-button');
const menuClose = document.getElementById('menu-close');

// Open sidebar
menuButton.addEventListener('click', () => {
  nav.classList.add('open');
});

// Close sidebar
menuClose.addEventListener('click', () => {
  nav.classList.remove('open');
});

// Close sidebar on ESC key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    nav.classList.remove('open');
  }
});

// Optional: Close sidebar when clicking outside nav (on mobile)
document.addEventListener('click', (e) => {
  if (
    nav.classList.contains('open') &&
    !nav.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    nav.classList.remove('open');
  }
});
