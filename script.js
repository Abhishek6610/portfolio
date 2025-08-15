
// Mobile menu
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const links = document.querySelector('.nav__links');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

links?.addEventListener('click', e => {
  if (e.target.closest('a')) {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize AOS
if (window.AOS) {
  AOS.init({
    once: true,
    duration: 700,
    easing: 'ease-out-cubic',
    offset: 80,
  });
}

// Optional: add subtle header shadow on scroll
window.addEventListener('scroll', () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  document.querySelector('.nav').style.boxShadow =
    y > 8 ? '0 6px 20px rgba(0,0,0,.35)' : 'none';
});

// Hero typed tagline
if (window.Typed) {
  new Typed('#typed', {
    strings: ["Backend Engineer • MERN • FinTech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true
  });
}
