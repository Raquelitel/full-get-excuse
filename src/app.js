/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// variables //

let who = [
  "My perro",
  "La tortuga Ninja",
  "El gato del vecino",
  "El loro de la plaza",
  "Mi iguana",
  "La ardilla del árbol"
];
let what = [
  "se comió el cable del rutter",
  "me mordió el dedo gordo",
  "me robó el café",
  "se durmió sobre el PC"
];
let when = [
  "mientras fui a la compra",
  "cuando yo estaba durmiendo",
  "justo al enviar la tarea",
  "durante la mañana"
];

let color = ["#b0f2c2", "#c7f6d4", "#ededaf", "#fcfcda", "#ffb6af"];
let excusa = "";

//EventListener //

document.body.addEventListener("click", cargarFuncion);

//Funciones //

function cargarFuncion() {
  excusa = document.getElementById("excuse");
  excusa.innerHTML = getExcusa();
  setBackgroundColor();
  generarImagen();
}

const getRandomNumber = el => {
  return el[Math.floor(Math.random() * (el.length - 1))];
};

function getExcusa() {
  let quien = getRandomNumber(who);
  let que = getRandomNumber(what);
  let cuando = getRandomNumber(when);

  excusa = `${quien} ${que} ${cuando}`;
  return excusa;
}

const setBackgroundColor = () => {
  const randomColor = getRandomNumber(color);
  document.getElementById("excuse").style.backgroundColor = randomColor;
};

function generarImagen() {
  if (excusa.includes("perro")) {
    document.getElementById("changeImg").src = "img/whippet.jpeg";
  } else if (excusa.includes("gato")) {
    document.getElementById("changeImg").src = "img/gato.jpeg";
  } else if (excusa.includes("tortuga")) {
    document.getElementById("changeImg").src = "img/tortuga.jpeg";
  } else if (excusa.includes("iguana")) {
    document.getElementById("changeImg").src = "img/iguana.jpeg";
  } else if (excusa.includes("ardilla")) {
    document.getElementById("changeImg").src = "img/ardilla.jpeg";
  } else {
    document.getElementById("changeImg").src = "img/loro.jpeg";
  }
}
