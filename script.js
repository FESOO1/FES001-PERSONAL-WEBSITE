// NAVBAR

/* POSITION NAVBAR */

const topBtn = document.querySelector('.position-top');
const bottomBtn = document.querySelector('.position-bottom');
const navbarContainer = document.querySelector('.navbar');

function bottomPosition() {
    bottomBtn.style.display = 'none';

    if(bottomBtn.style.display = 'none') {
        topBtn.style.display = 'unset'
        return
    }
}

function topPosition() {
    topBtn.style.display = 'none';

    if(topBtn.style.display = 'none') {
        bottomBtn.style.display = 'unset'
    }
}