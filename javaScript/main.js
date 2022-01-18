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

/*==================== SERVICES MODAL ====================*/
const servicesModalViews = document.querySelectorAll('.services__modal');
const servicesModalBtns = document.querySelectorAll('.services__button');
const servicesModalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
  servicesModalViews[modalClick].classList.add('active-modal');
}

servicesModalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  })
})

servicesModalCloses.forEach(modalClose => {
  modalClose.addEventListener('click', () => {
    servicesModalViews.forEach(modalView => {
      modalView.classList.remove('active-modal');
    })
  })
})
/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".portfolio__container", {
  effect: "cards",
  grabCursor: true,
  loop: true
});

/*==================== PORTFOLIO demo SWIPER  ====================*/
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});

/*==================== PORTFOLIO MODAL ====================*/
const portfolioModalViews = document.querySelectorAll('.portfolio__modal');
const portfolioModalBtns = document.querySelectorAll('.portfolio__button');
const portfolioModalCloses = document.querySelectorAll('.portfolio__modal-close');

let portfolioModal = function(modalClick){
  portfolioModalViews[modalClick].classList.add('active-modal');
}

portfolioModalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    portfolioModal(i);
  })
})

portfolioModalCloses.forEach(modalClose => {
  modalClose.addEventListener('click', () => {
    portfolioModalViews.forEach(modalView => {
      modalView.classList.remove('active-modal');
    })
  })
})

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

