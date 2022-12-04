const menuBtn = document.querySelector('.menu button');
const navbar = document.querySelector('.navbar');
const navbarA = document.querySelectorAll('.navbar li');


menuBtn.addEventListener(('click'), () => {
    navbar.classList.toggle('show-menu');
})

navbarA.forEach((nav) => {
    nav.addEventListener(('click'), () => {
        navbar.classList.remove('show-menu');
    })
})


//typing
const typing = document.querySelector('.typing');
let text = `Easy way to align webpage layout for responsive design`;
let i = 0;
const typingAnimation = setInterval(() => {
    typing.innerHTML += text[i];
    i++;

    if (i === text.length) clearInterval(typingAnimation);
}, 50);