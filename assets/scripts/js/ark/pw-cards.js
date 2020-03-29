var card = document.getElementsByClassName("pw-card");
var i;

for (i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    this.classList.toggle("pw-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}