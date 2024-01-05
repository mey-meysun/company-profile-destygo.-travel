
const navbar = document.querySelector(".nav-link");

document.querySelector("#icon").onclick = () => {
  navbar.classList.toggle("active");
  icon.classList.toggle('bx-x');
};


const icon = document.querySelector("#icon");

document.addEventListener("click", function (e) {
  if (!icon.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}