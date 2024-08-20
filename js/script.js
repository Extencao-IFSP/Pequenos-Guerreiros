// nav-bar

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

const numbers = document.querySelectorAll(".count");

if (numbers.length > 0) {
  const startNumberAnimation = (element) => {
    const number = +element.getAttribute('data-number');
    const numberDivision = number / 30;
    const animationRuntimeMS = 50;
    let dynamicNumber = 0;

    element.innerText = dynamicNumber;

    const animateNumbers = setInterval(() => {
      if (dynamicNumber < number) {
        dynamicNumber += numberDivision;
        element.innerText = Math.floor(dynamicNumber);
      } else {
        element.innerText = number;
        clearInterval(animateNumbers);
      }
    }, Math.random() * animationRuntimeMS);
  };

  numbers.forEach((number) => {
    startNumberAnimation(number);
  });
}
