let currentIndex = 0;

const dresses = document.querySelector(".dresses-container");
const images = document.querySelectorAll(".dresses-container img");
const totalImages = images.length;

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    dresses-container.style.transform.images `translateX(-${currentIndex * 100}%)`;
}

// Automatically move slides every 3 seconds
setInterval(nextSlide, 3000);
