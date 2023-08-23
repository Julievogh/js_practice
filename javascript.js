/* ØVELSE 1 */

const øl = document.getElementById("øl");
const snaps = document.getElementById("snaps");
const cola = document.getElementById("cola");
const fanta = document.getElementById("fanta");

øl.addEventListener("click", function () {
  buttonKlik(øl);
});

snaps.addEventListener("click", function () {
  buttonKlik(snaps);
});

cola.addEventListener("click", function () {
  buttonKlik(cola);
});

fanta.addEventListener("click", function () {
  buttonKlik(fanta);
});

function buttonKlik(drik) {
  if (drik === øl) {
    alert("Øl er læskende og indeholder alkohol!");
    console.log("Øl er læskende og indeholder alkohol!");
  } else if (drik === snaps) {
    alert("Snaps indeholder mange procenter alkohol! SKÅL!");
    console.log("Snaps indeholder mange procenter alkohol! SKÅL!");
  } else if (drik === cola) {
    alert("Det er en sodavand uden alkohol (men måske coke?!)");
    console.log("Det er en sodavand uden alkohol (men måske en gang coke?!)");
  } else if (drik === fanta) {
    alert("Det er en FANTAstisk sodavand uden alkohol");
    console.log("Det er en FANTAstisk sodavand uden alkohol");
  }
}



/*

let hejsa = "Hej Julie";
let java_lær = "i dag skal du lære javascript";

let greeting = `${hejsa}, du er sjov`;



function visBesked(txt) {
  console.log(txt);
}

visBesked("Goddag");

let besked = "Farvel";
visBesked(besked);

function gangTal(tal1, tal2) {
  let resultat = tal1 * tal2;
  console.log(resultat);
}

gangTal(3, 4);

function visBesked(message) {
  let first = "info:";
  return `${first} ${message}`;
}

let besked = "Puffy lugter af prut";
console.log(visBesked(besked));

let info = "Martin underviser i dag";
console.log(visBesked(info));

console.log(visBesked("Louise underviser først i næste uge"));
*/
