// NAVBAR

/* POSITION NAVBAR */

const topBtn = document.querySelector('.navbar-change-top-link');
const bottomBtn = document.querySelector('.navbar-change-bottom-link');
const navbarContainer = document.querySelector('.navbar');

function bottomPosition() {
    bottomBtn.style.display = 'none';

    if(bottomBtn.style.display = 'none') {
        topBtn.style.display = 'unset'
        return
    }

    if(bottomBtn.style.display = 'none') {
        navbarContainer.style.bottom = '5px';
        return
    }

    navbarContainer.style.bottom = '5px';
}

function topPosition() {
    topBtn.style.display = 'none';

    if(topBtn.style.display = 'none') {
        bottomBtn.style.display = 'unset'
        return
    }

    navbarContainer.style.top = '5px';
}