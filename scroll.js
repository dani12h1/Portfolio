"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let scrollKnap = document.querySelector("#scroll");
  let projects = document.querySelector(".project");

  scrollKnap.addEventListener("click", scrollFunction);

  function scrollFunction() {
    projects.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
});
