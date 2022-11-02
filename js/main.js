

/* ========== change background header ========= */

function scrollHeader() {
    const header = document.getElementById("header");


    if (this.scrollY >= 50) header.classList.add("scroll-header");

    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);




/* ===== services modal ============ */

const   modalViews = document.querySelectorAll(".services__modal"),
        modalBtns = document.querySelectorAll(".services__button"),
        modalClose = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick) {

    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((mb, i) =>{

    mb.addEventListener("click", () =>{

        modal(i)
    })
})

modalClose.forEach((mc) =>{

    mc.addEventListener("click", () =>{

        modalViews.forEach((mv) => {
            
            mv.classList.remove("active-modal");
        })
    })
})



/* ========== mixitup filter portfolio ========= */

let mixerPortfolio = mixitup(".work__container", {

    selectors: {

        target: ".work__card"
    },

    animation: {

        duration: 300
    }
});




/* link active work */

let linkWork = document.querySelectorAll(".work__item");

function activeWork() {

    linkWork.forEach(l => l.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(l => l.addEventListener("click", activeWork)) 




/* swiper testmonial */
let swiperTestimonial = new Swiper(".testimonial__container", {

    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpointd: {
        576: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});




/* scroll secticon acrive link  */

let sections = document.querySelectorAll("section[id]");

function scrollActive() {
    let scrollY = window.pageYOffset

    sections.forEach(current => {

        let sectionHeight = current.offsetHeight,
            sectionTop =current.offsetTop - 58,
            sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);




/* ========== light dark theme ============= */
let themeButton = document.getElementById('theme-button'),
    lightTheme = 'light-theme',
    iconTheme = 'bx-sun';



/* perviously selected topic ( if uset selected ) */

let selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon');


/* we obtain the current theme that the interface has by validating the dark-theme class */
let getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


/* we validate if the user previously chose a topic  */

if (selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}



/* active / deactivate the theme manually width the button */
themeButton.addEventListener('click', () => {

    /* add or remove the light /icon theme */
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





/* scroll reveal animation  */

let sr = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})




