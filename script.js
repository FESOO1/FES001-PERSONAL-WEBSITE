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

const sunContainer = document.querySelector('.sun-theme');
const moonContainer = document.querySelector('.moon-theme');
const body = document.querySelector('body');


function sunTheme() {
    moonContainer.style.display = 'unset'
    sunContainer.style.display = 'none'

    body.classList.toggle('bodyjs');

}

function moonTheme() {
    moonContainer.style.display = 'none'
    sunContainer.style.display = 'unset'

    body.classList.toggle('bodyjs');
}

/* sunContainer.addEventListener('click', function() {
    moonContainer.style.display = 'unset';
    sunContainer.style.display = 'none'
})

moonContainer.addEventListener('click', function() {
    moonContainer.style.display = 'none';
    sunContainer.style.display = 'unset'
}) */

/* SECTIONS */

const homeSection = document.querySelector('.home-section')
const infoSection = document.querySelector('.info-section')
const contactSection = document.querySelector('.contact-section')

document.querySelector('.info-link').addEventListener('click', function(){
    infoSection.style.left = '6%';

    homeSection.style.left = '-85%';

    contactSection.style.right = '-85%'
})
