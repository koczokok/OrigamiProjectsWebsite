const mobile = document.querySelector('.mobile-nav-links')
const btn = document.querySelector('.burger')
const body = document.querySelector("body")
const burger = document.querySelector("#burger")
const sectionOne = document.querySelector("#main")
const nav = document.querySelector(".nav")
const li = document.querySelectorAll(".mobile-nav-links li")
const img = document.querySelector("#bird")
const modal = document.querySelector('.bg-modal')
let height = nav.offsetHeight
console.log(height)
img.style.marginTop = height




window.addEventListener('resize', function(event){
  let height = nav.offsetHeight
  img.style.marginTop = height
});

btn.addEventListener('click', ()=>{
    mobile.classList.toggle('is-active')
    btn.classList.toggle('toggle')
    body.classList.toggle('burger-active')
    modal.classList.toggle('active')
   
})


li.forEach((li)=>{
  li.addEventListener('click', ()=>{
    mobile.classList.toggle('is-active')
    btn.classList.toggle('toggle')
    body.classList.toggle('burger-active')
    modal.classList.toggle('active')
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
        nav.classList.remove("scrolled-1");
      }
    });
  },
  sectionOneOptions);
  
  sectionOneObserver.observe(sectionOne);
  


const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to(".text", {y:'0%', duration: 1.5, stagger: 0.25})
tl.to(".intro", {y:'-100%', duration: 1, delay: 0.5})
tl.to(".intro", {display:'none'})
tl.fromTo("#bird", {opacity: 0}, {opacity: 0.38, duration: 0.75})
tl.fromTo(".nav", {opacity: 0}, {opacity: 1, duration: 1}, "-=0.5")
tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=0.5")



