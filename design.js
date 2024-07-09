var bulb = 0;
function findbulb() {
  if (bulb == 0) {
    document.getElementById("image").src = "on.webp";
    bulb = 1;
  } else {
    document.getElementById("image").src = "off.jpg";
    bulb = 0;
  }
}
