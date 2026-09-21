function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.site-nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

// Parallax line (horizontal)
function initParallax() {
  const lines = document.querySelectorAll('.parallax-line-horizontal');
  if (!lines.length) return;

  function updateParallax() {
    lines.forEach(line => {
      const speed = parseFloat(line.dataset.speed) || 0.3;
      line.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
  }

  window.addEventListener('scroll', updateParallax);
}

// Run everything once the page is ready
document.addEventListener('DOMContentLoaded', () => {
	initParallax();
	initHamburger();
});
