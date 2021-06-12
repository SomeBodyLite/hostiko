$(document).ready(function () {
  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
    $(".header-nav").toggleClass("open-menu");
    $(".header-nav").toggleClass("justify-content-between");
    $(".header-nav").toggleClass("d-flex");
    $(".header-nav").toggleClass("flex-column");
  });
});
