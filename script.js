// NAVBAR

/* POSITION NAVBAR */

let bottomSvg = document.querySelector('.navbar-change-link');
let topSvg = document.querySelector('.navbar-change-link1');
let navbarItself = document.querySelector('.navbar');

document.querySelector('.navbar-change-link').addEventListener('click', () => {
    navbarItself.classList.toggle('navbarjs');
});


function bottomPosition() {
    bottomSvg.style.display = 'none'
    if(bottomSvg.style.display = 'none') {
        topSvg.style.display = 'unset'
        return
    }
}

function topPosition() {
    topSvg.style.display = 'none'
    if(topSvg.style.display = 'none') {
        bottomSvg.style.display = 'unset'
        return
    }
}
