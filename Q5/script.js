const btn = document.querySelectorAll("button");
const red = btn[0];
const green = btn[1];
const blue = btn[2];
const ten = btn[3];
const twenty = btn[4];
const thirty = btn[5];
const helvetica = btn[6];
const ubuntu = btn[7];
const futura = btn[8];

const para = document.querySelector("p");

red.addEventListener("click", () => {
  para.style.color = "red";
});

green.addEventListener("click", () => {
  para.style.color = "green";
});

blue.addEventListener("click", () => {
  para.style.color = "blue";
});

ten.addEventListener("click", () => {
  para.style.fontSize = "10px";
});

twenty.addEventListener("click", () => {
  para.style.fontSize = "20px";
});

thirty.addEventListener("click", () => {
  para.style.fontSize = "30px";
});

helvetica.addEventListener("click", () => {
  para.style.fontFamily = "Helvetica";
});

ubuntu.addEventListener("click", () => {
  para.style.fontFamily = "Ubuntu";
});

futura.addEventListener("click", () => {
  para.style.fontFamily = "Futura";
});
