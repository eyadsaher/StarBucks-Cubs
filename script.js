"use strict";

document.querySelector(".tinyPicsTwo").addEventListener("click", function () {
  document.querySelector(".cupTwo").classList.remove("hidden");
  document.querySelector(".cupOne").classList.add("hidden");
  document.querySelector(".cupThree").classList.add("hidden");
  document.querySelector(".circle-green").classList.add("hidden");
  document.querySelector(".circle-pink").classList.add("hidden");
  document.querySelector(".circle-pinkish").classList.remove("hidden");
});

document.querySelector(".tinyPicsThree").addEventListener("click", function () {
  document.querySelector(".cupThree").classList.remove("hidden");
  document.querySelector(".cupOne").classList.add("hidden");
  document.querySelector(".cupTwo").classList.add("hidden");
  document.querySelector(".circle-green").classList.add("hidden");
  document.querySelector(".circle-pinkish").classList.add("hidden");
  document.querySelector(".circle-pink").classList.remove("hidden");
});

document.querySelector(".tinyPicsOne").addEventListener("click", function () {
  document.querySelector(".cupOne").classList.remove("hidden");
  document.querySelector(".cupTwo").classList.add("hidden");
  document.querySelector(".cupThree").classList.add("hidden");
  document.querySelector(".circle-green").classList.remove("hidden");
  document.querySelector(".circle-pinkish").classList.add("hidden");
  document.querySelector(".circle-pink").classList.add("hidden");
});
