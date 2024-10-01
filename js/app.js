// s-----------show Menu------------
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })

}
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
    
}
const navLink = document.querySelectorAll('.nav_link')

const linkAction = ()=>{
const navMenu = document.getElementById('nav-menu')
// when we click on each menu this show menu will remove....
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ================scroll sections active link===============
const scrollActive = () =>{
    const scrollDown =  window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ----------SCROLL UP-----------------------

let scrollUp = () =>{
    let scrollUp = document.getElementById('scroll-up')
    // -----
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
                    }
window.addEventListener('scroll', scrollUp)

// ============SCROLL REVEAL ANIMATION===================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400, 
})
sr.reveal('.home_data, .experience, .skills, .contact_container')
sr.reveal('.home_img',{delay:600})
sr.reveal('.home_scroll',{delay:800})
sr.reveal('.work_card, .services_card',{interval:100})
sr.reveal('.about_content',{origin:'right'})
sr.reveal('.about_img',{origin: 'left'})

