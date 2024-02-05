var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Fullstack Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true,
});

window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky, window.scrollY > 100');
};


let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
darkModeIcon.classList.toggle('bx-sun');
document.body.classList.toggle('dark-mode');
};