'use strict';
// Add active class to the current nav_bar_menu_item

const navbar__menu__items = document.querySelectorAll('.navbar__menu__item');
for (let i = 0; i < navbar__menu__items.length; i++) {
  navbar__menu__items[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// Add active class(active) to the current _menu_item
const menu = document.querySelectorAll('.menu');
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active-menu');
    current[0].className = current[0].className.replace(' active-menu', '');
    this.className += ' active-menu';
  });
}

// slider
const lunch = document.querySelector('.lunch');
const dinner = document.querySelector('.dinner');
const appetizer = document.querySelector('.appetizer');
const drinks = document.querySelector('.drinks');
const changePosition = document.querySelector('.dropdown-box_position');

lunch.addEventListener('click', () => {
  changePosition.style.transform = 'translateX(0)';
});

dinner.addEventListener('click', () => {
  changePosition.style.transform = 'translateX(-100%)';
});
appetizer.addEventListener('click', () => {
  changePosition.style.transform = 'translateX(-200%)';
});
drinks.addEventListener('click', () => {
  changePosition.style.transform = 'translateX(-300%)';
});

// make navbar background from transparent to colored-bg with scrolling
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__background-color');
  } else {
    navbar.classList.remove('navbar__background-color');
  }
});

// Handle scrolling when tapping on nav menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

//Nav bar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarBgColor = document.querySelector('#navbar');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  navbarToggleBtn.classList.toggle('close');
  navbarBgColor.classList.toggle('change-color');
});

const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Make Home slowly transparent as scrolling down
const homeContainer = document.querySelector('.home__container');
const homeContainerHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight;
  console.log(1 - window.scrollY / homeContainerHeight);
});

// show "arrow-up" button

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeContainerHeight) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// scrollIntoView function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
