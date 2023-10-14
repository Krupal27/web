
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;

// function updateSlider() {
//   const offset = -currentIndex * 300; // Adjust 300 based on your slide width
//   slider.style.transform = `translateX(${offset}px)`;
// }

// function nextSlide() {
//   if (currentIndex < slides.length - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0;
//   }
//   updateSlider();
// }

// // Autoplay functionality
// let autoplayInterval;

// function startAutoplay() {
//   autoplayInterval = setInterval(nextSlide, 2000); // Change the duration as needed (in milliseconds)
// }

// function stopAutoplay() {
//   clearInterval(autoplayInterval);
// }

// // Click event to move to the next slide
// slider.addEventListener('click', () => {
//   nextSlide();
//   stopAutoplay(); // Stop autoplay when user interacts with the slider
// });

// updateSlider();
// startAutoplay(); // Start autoplay when the page loads


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 300; // Adjust 300 based on your slide width
  slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

// Autoplay functionality
let autoplayInterval;

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 2000); // Change the duration as needed (in milliseconds)
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Click event to move to the next slide
slider.addEventListener('click', () => {
  nextSlide();
  stopAutoplay(); // Stop autoplay when user interacts with the slider
});

;

updateSlider();
startAutoplay(); // Start autoplay when the page loads



