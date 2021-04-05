// JavaScript Document
//--------------------------------click event aanmaken voor het hamburger icoon om menu te laten zien

var img = document.getElementById('hamburgermenu');
var source = img.src;
var toggleMenu = document.getElementById('toggleMenu');
var main = document.querySelector("main");
var menuFixed = document.getElementById('hamburgermenu');

img.addEventListener("click", openMenu);

function openMenu() {
  toggleMenu.classList.toggle("clickedMenu");
  main.classList.toggle("mainfixed");
  menuFixed.classList.toggle("menufixed");

  if(img.src == source)
  {
    img.src = "./images/hamburgerkruislogo.svg";
  }
  else {
    img.src = "./images/hamburgerlogo.svg";
  }
}

//--------------------------------click event aanmaken voor een eventHandler om meerdere elementen aan te spreken (if...else... statement)

var button = document.querySelectorAll("main section:nth-of-type(5) article div");
var imgSource = document.querySelector("main section:nth-of-type(5) article div img").src;
var i = button;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", seeReview);
}

function seeReview(event) {
  console.log(event.currentTarget);
  //img aanspreken van de target
  var plus = event.currentTarget.querySelector("img");
  event.currentTarget.classList.toggle("showtext");

//!== --> omgekeerd, dus wanneer de plus.src NIET gelijk is aan imgSource
  if(plus.src !== imgSource)
  {
    plus.src = "images/plus.svg";
  }
  else {
    plus.src = "images/min.svg";
  }
}
