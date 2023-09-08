const mobile = document.querySelector(".mobile-nav-links"),
  btn = document.querySelector(".burger"),
  body = document.querySelector("body"),
  burger = document.querySelector("#burger"),
  sectionOne = document.querySelector("#main"),
  nav = document.querySelector(".nav"),
  li = document.querySelectorAll(".mobile-nav-links li"),
  img = document.querySelector("#bird"),
  modal = document.querySelector(".bg-modal");
let height = nav.offsetHeight;
console.log(height),
  (img.style.marginTop = height),
  window.addEventListener("resize", function (e) {
    let t = nav.offsetHeight;
    img.style.marginTop = t;
  }),
  btn.addEventListener("click", () => {
    mobile.classList.toggle("is-active"),
      btn.classList.toggle("toggle"),
      body.classList.toggle("burger-active"),
      modal.classList.toggle("active");
  }),
  li.forEach((e) => {
    e.addEventListener("click", () => {
      mobile.classList.toggle("is-active"),
        btn.classList.toggle("toggle"),
        body.classList.toggle("burger-active"),
        modal.classList.toggle("active");
    });
  });
const sectionOneOptions = { rootMargin: "-200px 0px 0px 0px" },
  sectionOneObserver = new IntersectionObserver(function (e, t) {
    e.forEach((e) => {
      e.isIntersecting
        ? nav.classList.remove("scrolled-1")
        : nav.classList.add("scrolled-1");
    });
  }, sectionOneOptions);
sectionOneObserver.observe(sectionOne);
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 }),
  tl.to(".intro", { y: "-100%", duration: 1, delay: 0.5 }),
  tl.to(".intro", { display: "none" }),
  tl.fromTo("#bird", { opacity: 0 }, { opacity: 0.38, duration: 0.75 }),
  tl.fromTo(".nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5"),
  tl.fromTo(
    ".big-text",
    { opacity: 0 },
    { opacity: 1, duration: 0.5 },
    "-=0.5"
  );
