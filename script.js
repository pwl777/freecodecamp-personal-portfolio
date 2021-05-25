const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-link");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
