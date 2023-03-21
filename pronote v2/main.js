const planning = document.querySelector(".planning");
const button = document.querySelector(".button-right");

button.addEventListener('click', function() {
  if (planning.classList.contains("rolled-planning")) {
    planning.classList.remove("rolled-planning");
    planning.classList.add("unrolled-planning");
    button.innerHTML = "<";
  }
  else {
    planning.classList.add("rolled-planning");
    planning.classList.remove("unrolled-planning");
    button.innerHTML = ">";
  }

});

var content_left = document.querySelector(".content-left")
fetch("planning.html")
.then(response => response.text())
.then(html => {
content_left.innerHTML = html;
});

var menu = document.querySelector(".menu")
fetch("menu.html")
.then(response => response.text())
.then(html => {
menu.innerHTML = html;
});