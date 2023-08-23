/* ØVELSE 2 */

let tidsHilsen = new Date().getHours();

if (tidsHilsen >= 5 && tidsHilsen < 10) {
  alert("Godmorgen");
  console.log("Godmorgen");
} else if (tidsHilsen >= 10 && tidsHilsen < 18) {
  alert("Goddag");
  console.log("Goddag");
} else if (tidsHilsen >= 18 && tidsHilsen < 24) {
  alert("Godaften");
  console.log("Godaften");
} else if (tidsHilsen >= 0 && tidsHilsen < 5) {
  alert("Godnat");
  console.log("Godnat");
}
