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

/* SECTIONS */

const homeSection = document.querySelector('.home-section')
const infoSection = document.querySelector('.info-section')
const contactSection = document.querySelector('.contact-section')

document.querySelector('.home-link').addEventListener('click', function(){
    infoSection.style.left = '-85%';

    homeSection.style.left = '6%';

    contactSection.style.right = '-85%'
})

document.querySelector('.info-link').addEventListener('click', function(){
    infoSection.style.left = '6%';

    homeSection.style.left = '-85%';

    contactSection.style.right = '-85%'
})

document.querySelector('.contact-link').addEventListener('click', function(){
    infoSection.style.left = '-85%';

    homeSection.style.left = '98%';

    contactSection.style.right = '6%'
})

/* DIFFERENT */

document.querySelector('.home-section').addEventListener('click', function(){
    infoSection.style.left = '-85%';

    homeSection.style.left = '6%';

    contactSection.style.right = '-85%'
})

document.querySelector('.info-section').addEventListener('click', function(){
    infoSection.style.left = '6%';

    homeSection.style.left = '-85%';

    contactSection.style.right = '-85%'
})

document.querySelector('.contact-section').addEventListener('click', function(){
    infoSection.style.left = '-85%';

    homeSection.style.left = '98%';

    contactSection.style.right = '6%'
})

/* SCROLL  hint */

const insideHomesection = document.querySelector('.inside-home-section');

document.querySelector('.home-scroll-hint').addEventListener('click', () =>{
    insideHomesection.classList.toggle('homescrolljs');
})