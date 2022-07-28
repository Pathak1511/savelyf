let btnMenu = document.querySelector(".openMenu");
let btnCloseMenu = document.querySelector(".closeMenu");
const navBar = document.querySelector(".nav-lists");
const mainImg = document.querySelector(".hero-img");
const opacity = document.querySelector(".share-logo");
const video = document.querySelector(".video1");
const aboutus = document.querySelector(".aboutus");
const contactus = document.querySelector(".contactus");
const dots_1 = document.querySelector(".dot-11");
const dots_2 = document.querySelector(".dot-12");

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
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
prevBtn.addEventListener("click", function () {
  prevBtn.classList.add("backGround");
  nextBtn.classList.remove("backGround");
  aboutus.style.display = "block";
  contactus.style.display = "none";
  dots_1.classList.add("active");
  dots_2.classList.remove("active");
});
nextBtn.addEventListener("click", function () {
  prevBtn.classList.remove("backGround");
  nextBtn.classList.add("backGround");
  aboutus.style.display = "none";
  contactus.style.display = "block";
  dots_1.classList.remove("active");
  dots_2.classList.add("active");
});

// DARK MODE SETUP
const darkbtn = document.querySelector(".dark");
const lightbtn = document.querySelector(".light");

let logo = document.querySelectorAll(".logo-text");

darkbtn.addEventListener("click", function () {
  darkbtn.classList.add("hidden");
  lightbtn.classList.remove("hidden");
  document.documentElement.style.setProperty("--body", "#000");
  //#21262d
  document.documentElement.style.setProperty("--body02", "#2f3030");
  //#2f3030
  document.documentElement.style.setProperty("--body03", "#090e10");
  //#161b22
  document.documentElement.style.setProperty("--fontColor1", "#f9f9f9");
  document.documentElement.style.setProperty("--fontColor2", "#f0f0f0");
  document.documentElement.style.setProperty("--sidebar", "#1f262ad1");
  //#21262d
  document.documentElement.style.setProperty("--button", "#135d8e");
  document.documentElement.style.setProperty("--text3", "#f8f8f8");
});

lightbtn.addEventListener("click", function () {
  darkbtn.classList.remove("hidden");
  lightbtn.classList.add("hidden");
  document.documentElement.style.removeProperty("--body", "#000");
  document.documentElement.style.removeProperty("--body02", "#2f3030");
  document.documentElement.style.removeProperty("--body03", "#090e10");
  document.documentElement.style.removeProperty("--fontColor1", "#f9f9f9");
  document.documentElement.style.removeProperty("--fontColor2", "#f0f0f0");
  document.documentElement.style.removeProperty("--sidebar", "#1f262ad1");
  document.documentElement.style.removeProperty("--button", "#135d8e");
  document.documentElement.style.removeProperty("--text3", "#f8f8f8");
});
