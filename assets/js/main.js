// MENU SHOW
let showMenu = (toggleId, navId) => {
  let toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// ACTIVE AND REMOVE MENU
let navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  //Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //Remove menu mobile
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL REVEAL ANIMATION
let sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// SCROLL HOME
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

// SCROLL ABOUT
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

//SCROLL SKILLS
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 400 });

//SCROLL WORK
sr.reveal(".work__img", { interval: 200 });

//SCROLL CONTACT
sr.reveal(".contact__input", { interval: 200 });

//DARK MODE BTN
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn__icon");

//to save the dark mode use the object "local storage".

function store(value) {
  localStorage.setItem("darkmode", value);
}

function load() {
  const darkmode = localStorage.getItem("darkmode");

  //if the dark mode was never activated
  if (!darkmode) {
    store(false);
    icon.classList.add("bxs-sun");
  } else if (darkmode == "true") {
    body.classList.add("darkmode");
    icon.classList.add("bxs-moon");
  } else if (darkmode == "false") {
    icon.classList.add("bxs-sun");
  }
}

load();

btn.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  icon.classList.add("animated");

  //save true or false
  store(body.classList.contains("darkmode"));

  if (body.classList.contains("darkmode")) {
    icon.classList.remove("bxs-sun");
    icon.classList.add("bxs-moon");
  } else {
    icon.classList.remove("bxs-moon");
    icon.classList.add("bxs-sun");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});
