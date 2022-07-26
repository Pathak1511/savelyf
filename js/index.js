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

///////////////////////
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
prevBtn.addEventListener("click", function () {
  prevBtn.classList.add("backGround");
  nextBtn.classList.remove("backGround");
});
nextBtn.addEventListener("click", function () {
  prevBtn.classList.remove("backGround");
  nextBtn.classList.add("backGround");
});

///////
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
