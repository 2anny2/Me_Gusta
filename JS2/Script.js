var NumContainer1 = document.querySelector(".count1");
var boton1 = document.querySelector(".likes1");
var contador1 = 9; 
boton1.addEventListener("click", () => {contador1++; NumContainer1.textContent = contador1 });

var NumContainer2 = document.querySelector(".count2");
var boton2 = document.querySelector(".likes2");
var contador2 = 12;
boton2.addEventListener("click", () => {contador2++; NumContainer2.textContent = contador2 });

var NumContainer3 = document.querySelector(".count3");
var boton3 = document.querySelector(".likes3");
var contador3 = 12;
boton3.addEventListener("click", () => {contador3++; NumContainer3.textContent = contador3 });