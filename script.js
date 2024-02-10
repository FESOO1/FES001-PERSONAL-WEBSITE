// NAVBAR

/* POSITION NAVBAR */

/* let bottomSvg = document.querySelector('.navbar-change-link');
let topSvg = document.querySelector('.navbar-change-link1');
let navbarItself = document.querySelector('.navbar');

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
} */

const themeChanger = document.querySelector('.theme-changer-link');
const themeSvg = document.querySelector('.position-svg');

function chanegPosition() {
    themeSvg.classList.toggle('svgjs');
}