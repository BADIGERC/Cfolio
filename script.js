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
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
  } else {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
  }
};
