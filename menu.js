const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.header__nav');

// function to open nav links
function openNavLinks() {
    if (navLinks.style.transform === 'scaleX(1)') {
        navLinks.style.transform = 'scaleX(0)';
    }
    else{
        navLinks.style.transform = 'scaleX(1)';
    }
}

// run function when menu btn is clicked
menuBtn.addEventListener('click', openNavLinks);