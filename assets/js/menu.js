$(document).ready(function () {
  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
    $(".header-nav").toggleClass("open-menu");
    $(".header-nav").toggleClass("justify-content-between");
    $(".header-nav").toggleClass("d-flex");
    $(".header-nav").toggleClass("flex-column");
  });
});

function viewDiv() {
  if (document.getElementById("m-drop").style.display == "block") {
    document.getElementById("m-drop").style.display = "none";
    document
      .querySelectorAll(".dropdown-content")
      .forEach((child) => child.classList.remove("dropdown-content--active"));
  } else {
    document.getElementById("m-drop").style.display = "block";
    document
      .querySelectorAll(".dropdown-content")
      .forEach((child) => child.classList.add("dropdown-content--active"));
  }
}
