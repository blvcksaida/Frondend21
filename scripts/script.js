// JavaScript Document
// scroll event voor een sticky button op de home pagina 'download nu de app'
console.log(document.body)
console.log("hoi");

var sticky = document.querySelector("header:nth-of-type(2) a");

sticky.addEventListener("scroll", stickyButton);

function stickyButton() {
  if (sticky > 600) {
    sticky.addClass("stickybutton");
  } else {
    sticky.removeClass("stickybutton");
  }
}
