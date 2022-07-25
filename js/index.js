const btnMenu = document.querySelector(".openMenu");
const btnCloseMenu = document.querySelector(".closeMenu");
const navBar = document.querySelector(".nav-lists");
const mainImg = document.querySelector(".hero-img");
const opacity = document.querySelector(".share-logo");
const video = document.querySelector(".video1");

btnMenu.addEventListener("click", function () {
  navBar.classList.add("select");
  btnCloseMenu.style.display = "block";
  btnMenu.style.display = "none";
  mainImg.classList.remove("filter");
  video.classList.remove("filter");
  opacity.classList.add("opacity");
});

btnCloseMenu.addEventListener("click", function () {
  navBar.classList.remove("select");
  btnCloseMenu.style.display = "none";
  btnMenu.style.display = "block";
  mainImg.classList.add("filter");
  video.classList.add("filter");
  opacity.classList.remove("opacity");
});
