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

/*==================== QUALIFICATION TABS ====================*/
const selectedBtn = document.querySelectorAll('.qualification__button');
const selectedSection = document.querySelectorAll('.qualification__content');

selectedBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      selectedBtn.forEach((section, i) => {
        if (section.classList.contains("qualification__activeBtn")) {
          section.classList.remove("qualification__activeBtn");
          selectedSection[i].classList.remove("qualification__active");
        }
      });
      btn.classList.add("qualification__activeBtn");
      selectedSection[index].classList.add("qualification__active");
    });
  });

// const tabs = document.querySelectorAll('[data-target]');
// const tabContents = document.querySelectorAll('[data-content]');
// 
// tabs.forEach(tab =>{
//     tab.addEventListener('click', ()=>{
//         const target = document.querySelector(tab.dataset.target);

//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('qualification__active');
//         })
//         target.classList.add('qualification__active');

//         tab.forEach(tab=>{
//             tab.classList.remove('qualification__active');
//         })
//         tab.classList.add('qualification__active');
//     });
// });

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/