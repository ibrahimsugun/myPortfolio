'use strict';

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}
/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * NAVBAR
 * navbar toggle for mobile
 */
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * header active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }


  /**
   * RESPONSIVE
   */

  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });
  if (/Mobi/.test(navigator.userAgent)) {
    setInterval(() => {
      slideNext();
    }, 5000);
  }
  
}
for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }

 function sagtus() { //sağ tık engelle
  if (event.button == 2) {
    var mesajlar = [
      "No right clicks :)",
      "Don't do again.",
      "What are you looking for?",
      "Right-clicking won't work here.",
      "Sorry, no right-clicking allowed.",
      "This is a no right-click zone."
    ];

    var randomIndex = Math.floor(Math.random() * mesajlar.length);
    var randomMesaj = mesajlar[randomIndex];
    
    alert(randomMesaj);
    return false;
  }
}
document.onmousedown=sagtus; 

/* document.addEventListener('contextmenu', event => event.preventDefault()); sağ tık engelle
 */

document.onkeydown = function(e) {



  // F12 Engelle
    if (e.keyCode == 123) {
          return false;
    } 

    // CTRL+I Engelle
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
   
        return false;
    }

    // CTRL+J Engelle
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
  
        return false;
    }

    // CTRL+S Engelle
    if (e.ctrlKey && e.keyCode == 83) {
   
        return false;
    }

    // CTRL+U Engelle
    if (e.ctrlKey && e.keyCode == 85) {
  
        return false;
    }

} 

/* document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
}); */