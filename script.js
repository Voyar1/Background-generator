"use strict";

const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.querySelector(".random");

colorChange();

function colorChange() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.textContent = body.style.background + `;`;
}

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);

function randomGradient() {
  const r1 = Math.floor(Math.random() * 255 + 1);
  const g1 = Math.floor(Math.random() * 255 + 1);
  const b1 = Math.floor(Math.random() * 255 + 1);
  const r2 = Math.floor(Math.random() * 255 + 1);
  const g2 = Math.floor(Math.random() * 255 + 1);
  const b2 = Math.floor(Math.random() * 255 + 1);

  body.style.background = `linear-gradient(to right, rgba(${r1},${g1}, ${b1} ), rgba(${r2},${g2},${b2}))`;

  css.textContent = body.style.background + `;`;
  color1.value = RGBToHex(r1, g1, b1);
  color2.value = RGBToHex(r2, g2, b2);
}

function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

randomBtn.addEventListener("click", randomGradient);
