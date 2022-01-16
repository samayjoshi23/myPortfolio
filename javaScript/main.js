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


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/