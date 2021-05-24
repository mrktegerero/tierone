const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navList.classList.toggle('nav-list-active')
})

navList.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navList.classList.toggle('nav-list-active')
})

const scrollFloat = (element, animIn, animOut, delay) => {
    const width = window.innerWidth
    const isMobile = width <= 766 ? true : false
    const els = document.querySelectorAll(`.${element}`)
    els.forEach(el => {
     const y = el.getBoundingClientRect().top
     const winY = window.innerHeight - 50
     if (y < winY){
      const isVisible = true
      el.style.animation = isVisible ? isMobile ? (animIn == "width-to-full") ? "width-to-full-mob .8s ease-out forwards" : `${animIn} .8s ease-out forwards` : `${animIn} 1s ease-out forwards` : `${animOut} 1s ease-out forwards`
      el.style.animationDelay = isVisible ? isMobile ? '.3s' : `${delay}`: null
     }
    })
   }
   
   
document.addEventListener("scroll" , () => {
    scrollFloat("about-left h4", "float", "sink", "1.5s")
    scrollFloat("about-left h6", "float", "sink", "1.7s")
    scrollFloat("about-top", "float", "sink", "2.3s")
    scrollFloat("about-bottom", "float", "sink", "2.3s")
    scrollFloat("pioneers-title", "float", "sink", "2.3s")
    scrollFloat("pioneers-glide", "float", "sink", "1.5s")
    scrollFloat("plan-left", "float", "sink", "1.5s")
    scrollFloat("plan-right", "float", "sink", "2s")
    scrollFloat("investor-title", "float", "sink", "1.5s")
    scrollFloat("investor-left", "float", "sink", "1.5s")
    scrollFloat("investor-right", "float", "sink", "2s")
    scrollFloat("about-left", "height-to-width", "height-to-width-reverse", ".5s")
   })
   document.addEventListener("DOMContentLoaded" , () => {
    scrollFloat("about-left h4", "float", "sink", "1.5s")
    scrollFloat("about-left h6", "float", "sink", "1.7s")
    scrollFloat("about-top", "float", "sink", "2.3s")
    scrollFloat("about-bottom", "float", "sink", "2.3s")
    scrollFloat("pioneers-title", "float", "sink", "2.3s")
    scrollFloat("pioneers-glide", "float", "sink", "1.5s")
    scrollFloat("plan-left", "float", "sink", "1.5s")
    scrollFloat("plan-right", "float", "sink", "2s")
    scrollFloat("investor-title", "float", "sink", "1.5s")
    scrollFloat("investor-left", "float", "sink", "1.5s")
    scrollFloat("investor-right", "float", "sink", "2s")
    scrollFloat("about-left", "height-to-width", "height-to-width-reverse", ".5s")
   })

   new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    autoplay: 3000,
    hoverpause: false,
    perView: 4,
    breakpoints: {
        1025: {
            perView: 2
        }
    }
  }).mount()

