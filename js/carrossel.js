const images = document.querySelectorAll('.carousel img');
const prev = document.getElementById("prev-button");
const next = document.getElementById("next-button");

let currentIndex = 0;

const showImage = (index) => {
    images[currentIndex].classList.remove('active');
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

const showNextImage = () => {
    showImage(currentIndex + 1);
}

const showPrevImage = () => {
    showImage(currentIndex - 1);
}

setInterval(showNextImage, 5000);

prev.addEventListener("click", () => showPrevImage());
next.addEventListener("click", () => showNextImage());