const icon1 = document.getElementById("fa-bars")
const icon2 = document.getElementById("fa-x")
const navmini = document.getElementById("nav-mini")

const targetDiv = document.getElementById("cookies")
const btn = document.getElementById("toggle")

btn.onclick = function() {
  targetDiv.style.display = "none"
}

function show1() {
    icon1.style.display = "none"
    icon2.style.display = "flex"
    navmini.style.left = "0"
}

function show2() {
    icon2.style.display = "none"
    icon1.style.display = "flex"
    navmini.style.left = "-100%"
}

function hide() {
    navmini.style.left = "-100%"
    icon1.style.display = "flex"
}


var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};



