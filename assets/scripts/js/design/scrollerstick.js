window.onscroll = function() {
  scrollPosition()
};

var header = document.getElementById("barcon");

var sticky = header.offsetTop;

function scrollPosition() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}