const geri = document.getElementById("geri");
const melc = document.getElementById("melc");
const emma = document.getElementById("emma");
const victoria = document.getElementById("victoria");
const melb = document.getElementById("melb");

geri.addEventListener("click", function () {
  SpiceGirl("Geri", "Ginger Spice");
});

melc.addEventListener("click", function () {
  SpiceGirl("Mel C", "Sporty Spice");
});
/* Another way to do it below*/

function emmaClickHandler() {
  SpiceGirl("Emma", "Baby Spice");
}
emma.addEventListener("click", emmaClickHandler);

victoria.addEventListener("click", function () {
  SpiceGirl("Victoria", "Posh Spice");
});

melb.addEventListener("click", function () {
  SpiceGirl("Mel B", "Scary Spice");
});

function SpiceGirl(name, spice) {
  alert(`${name} is called ${spice}`);
}



/* Hearts on click */

const heartsContainer = document.getElementById("heartsContainer");

document.addEventListener("click", addHeart);

function addHeart(event) {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "❤️"; // You can use the heart symbol or an image URL here

  const x = event.clientX;
  const y = event.clientY;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  heartsContainer.appendChild(heart);

  // Remove heart after a short delay (e.g., 2 seconds)
  setTimeout(() => {
    heart.remove();
  }, 2000);
}
