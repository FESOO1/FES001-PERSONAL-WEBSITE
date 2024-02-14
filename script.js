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
    homeSection.style.display = 'flex';
    infoSection.style.display = 'none';
    contactSection.style.display = 'none';
})

document.querySelector('.info-link').addEventListener('click', function(){
    homeSection.style.display = 'none';
    infoSection.style.display = 'flex';
    contactSection.style.display = 'none';
})

document.querySelector('.contact-link').addEventListener('click', function(){
    homeSection.style.display = 'none';
    infoSection.style.display = 'none';
    contactSection.style.display = 'flex';
})

/* SCROLL  hint */

/* const insideHomesection = document.querySelector('.inside-home-section');
const scrollHome = document.querySelector('.home-scroll-hint');

document.querySelector('.home-scroll-hint').addEventListener('click', () =>{
    insideHomesection.classList.toggle('homescrolljs');

    scrollHome.classList.toggle('scrollhomevisible');
}) */

/* ONLINE CHAT with me */
const inputMessage = document.querySelector('#online-chat');
const outputMessage = document.querySelector('.chat-itself');


function sendaMessage() {
    const value = inputMessage.value.trim()
    if(value.length === 0) {
        inputMessage.value = ""
        return
    }

    outputMessage.innerHTML += `<p>${value}</p>`
    inputMessage.value = '' 
}

/* function alertonSubmit() {
    alert('Hi, thank you for contacting me. I have received your message, I will reach back to you as soon as I have time.')
} */