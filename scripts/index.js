import Swiper from "./swiper.js";

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
});

const rangeInput = document.querySelector(".range__input");
const rangeMobileValue = document.querySelector(".mobile-range__value--green");
const minusBtnRange = document.querySelector(".range__mobile-minus-btn");
const plusBtnRange = document.querySelector(".range__mobile-plus-btn");

rangeMobileValue.textContent = rangeInput.value;

minusBtnRange.addEventListener("click", () => {
  rangeInput.value--;
  rangeMobileValue.textContent = rangeInput.value;
});
plusBtnRange.addEventListener("click", () => {
  rangeInput.value++;
  rangeMobileValue.textContent = rangeInput.value;
});

const windows = document.querySelectorAll(".window");
const calcWindow = document.querySelector(".calc-window");
const menuWindow = document.querySelector(".menu-window");
const closeBtns = document.querySelectorAll(".close-btn");
const burgerBtn = document.querySelector(".burger-btn");
const calcBtn = document.querySelector(".calc-btn");

function closeWindow(popup, selector) {
  popup.classList.add(selector);
  window.removeEventListener("keydown", closeWindowByEsc);
}

function openWindow(popup, selector) {
  popup.classList.remove(selector);
  window.addEventListener("keydown", closeWindowByEsc);
}

function closeWindowByEsc(e) {
  if (e.key == "Escape") {
    windows.forEach((w) => {
      closeWindow(w, "hidden");
    });
  }
}

burgerBtn.addEventListener("click", (e) => {
  openWindow(menuWindow, "hidden");
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    closeWindow(e.target.closest(".window"), "hidden");
  });
});

calcBtn.addEventListener("click", () => {
  openWindow(calcWindow, "hidden");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-navigation__right",
    prevEl: ".swiper-navigation__left",
  },
  effect: "coverflow",
  slidesPerView: 3,
  centeredSlide: true,
  coverflowEffect: {
    rotate: 0,
    slideShadows: true,
    modifier: 3,
  },
});

// $('a[href^="#"').on("click", function () {
//   let href = $(this).attr("href");

//   $("html, body").animate({
//     scrollTop: $(href).offset().top,
//   });
//   return false;
// });
