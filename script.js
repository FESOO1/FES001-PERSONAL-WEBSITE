// NAVBAR

/* POSITION NAVBAR */

const positionChanger = document.querySelector('.position-changer-link');
const positionSvg = document.querySelector('.position-svg');
const navbarContainer = document.querySelector('.navbar');

function chanegPosition() {
    positionSvg.classList.toggle('svgjs');

    navbarContainer.classList.toggle('navbarjs');

    positionChanger.classList.toggle('positionjs')
}

/* THEME */

const sunTheme = document.querySelector('.sun-theme');
const moonTheme = document.querySelector('.moon-theme');

function sunTheme() {
    sunTheme.style.display = 'none';
    if(sunTheme.style.display = 'none') {
        moonTheme.style.display = 'unset'
        return
    }
}

/* function moonTheme() {
    moonTheme.style.display = 'none';
    if(moonTheme.style.display = 'none') {
        sunTheme.style.display = 'unset'
        return
    }
} */