const mobile = document.querySelector('.mobile-nav-links')
const btn = document.querySelector('.burger')
const body = document.querySelector("body")
const burger = document.querySelector("#burger")
const sectionOne = document.querySelector(".one")
const nav = document.querySelector(".nav")
const li = document.querySelectorAll(".mobile-nav-links li")


btn.addEventListener('click', ()=>{
    mobile.classList.toggle('is-active')
    btn.classList.toggle('toggle')
    body.classList.toggle('burger-active')
    
   
})


li.forEach((li)=>{
  li.addEventListener('click', ()=>{
    mobile.classList.toggle('is-active')
    btn.classList.toggle('toggle')
    body.classList.toggle('burger-active')
  })
})
const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
  };
  
  const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        nav.classList.add("scrolled-1");
      } else {
        mav.classList.remove("scrolled-1");
      }
    });
  },
  sectionOneOptions);
  
  sectionOneObserver.observe(sectionOne);
  


const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to(".text", {y:'0%', duration: 1.5, stagger: 0.25})
tl.to(".intro", {y:'-100%', duration: 1, delay: 0.5})
tl.to(".intro", {display:'none'})
tl.fromTo("#bimg", {opacity: 0}, {opacity: 0.5, duration: 0.5}, "-=0.5")
tl.fromTo(".nav", {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=0.5")



