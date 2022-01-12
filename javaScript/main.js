/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show-menu');
}
navLink.forEach(link => link.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const bars = document.querySelectorAll('.skills__percentage');
bars.forEach(bar => { bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.innerText });


const skillsHeaders = document.querySelectorAll('.skills__header');

skillsHeaders.forEach(header => {
    header.addEventListener("click", event => {
        header.classList.toggle('skills__active');
    });
});





// const skillsContent = document.querySelectorAll('.skills__content');
// const skillsHeader = document.querySelectorAll('.skills__header');

// function toggleSkills(){
//     let itemClass = this.parentNode.className;
//     for( let i = 0 ; i < skillsContent ; i++){
//         skillsContent[i].className = 'skills__content skills__close';
//     }
//     if(itemClass === 'skills__content skills__close'){
//         this.parentNode.className = 'skills__content skills__open'
//     }
// }
// skillsHeader.forEach(header =>{
//     header.addEventListener('click', toggleSkills);
// })
/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/