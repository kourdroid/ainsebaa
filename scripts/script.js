// preloader
 window.onload = function() {
    // Hide or remove preloader
     document.getElementById('preloader').style.display = 'none';
 }

// burger menubar

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".fa-bars");
  const menuItems = document.querySelector(".nav"); // Corrected selector to target the .nav div

  burgerIcon.addEventListener("click", function () {
    menuItems.classList.toggle("mobile-menu-closed");
    // Ensure that the menu is not 'display: none' when we want to animate it.
    // The 'hidden' class from Tailwind might interfere.
    // It's better to control visibility purely through 'mobile-menu-closed' on small screens.
    if (!menuItems.classList.contains("mobile-menu-closed")) {
      menuItems.classList.remove("hidden"); // Remove Tailwind's hidden if we are opening it
    }
    // Note: We might need to re-add 'hidden' if 'mobile-menu-closed' is added and we want to ensure it's hidden for non-JS or specific scenarios.
    // However, for pure max-height animation, 'mobile-menu-closed' should suffice.
  });
});

// Intersection Observer for scroll-triggered animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

animatedElements.forEach(element => {
  observer.observe(element);
});
window.addEventListener('scroll',()=>{
  let header = document.querySelector('header')
  header.classList.toggle("sticky",window.scrollY > 0);

});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-item').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});





