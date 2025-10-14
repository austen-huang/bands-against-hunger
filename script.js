let lastScroll = 0;
const header = document.querySelector('header');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down — hide header + nav
    header.style.top = '-100px'; // move header off screen
    nav.style.top = '-50px';     // move nav off screen
  } else {
    // Scrolling up — show header + nav
    header.style.top = '0';
    nav.style.top = '80px';      // original position under header
  }

  lastScroll = currentScroll;
});
