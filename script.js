// NAVBAR

/* POSITION NAVBAR */

const svgSelect = document.querySelector('.position-svg');

document.querySelector('.navbar-change-link').addEventListener('click', () =>{
    svgSelect.classList.toggle('svgjs');
})


const navbarSelect = document.querySelector('.navbar');

document.querySelector('.navbar-changer').addEventListener('click', () => {
    navbarSelect.classList.toggle('navbarjs')
})