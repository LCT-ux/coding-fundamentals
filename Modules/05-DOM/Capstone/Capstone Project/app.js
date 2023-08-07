const navbar = document.getElementById('navbar');
let prevScrollPos = window.pageYOffset;

document.addEventListener('mousemove', () => {
  if (window.pageYOffset < 10) {
    navbar.style.top = '0';
  }
});

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  
  if (currentScrollPos > prevScrollPos) {
    navbar.style.top = '-100px';
  } else {
    navbar.style.top = '0';
  }
  
  prevScrollPos = currentScrollPos;
});
