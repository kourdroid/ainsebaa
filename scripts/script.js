// preloader
 window.onload = function() {
    // Hide or remove preloader
     document.getElementById('preloader').style.display = 'none';
 }

// burger menubar

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".fa-bars");
  const menuItems = document.querySelector(".font-normal");

  burgerIcon.addEventListener("click", function () {
    menuItems.classList.toggle("hidden");
  });
});


window.addEventListener('scroll',()=>{
  let header = document.querySelector('header')
  header.classList.toggle("sticky",window.scrollY > 0);

})





