
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