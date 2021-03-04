// the const that looks for the document... called nav-toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// narrow function
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

 // this will make dissapear the nav and go to section
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})
