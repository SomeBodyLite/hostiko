$(document).ready(function () {
  $(".tabs-2-triggers__item").click(function (e) {
    e.preventDefault();

    $(".tabs-2-triggers__item").removeClass("tabs-2-triggers__item--active");
    $(".tabs-2-content__item").removeClass("tabs-2-content__item--active");

    $(this).addClass("tabs-2-triggers__item--active");
    $($(this).attr("href")).addClass("tabs-2-content__item--active");
  });
  // Вкл/выкл
  $(".tabs-2-triggers__item--active").click(function (e) {
    e.preventDefault();

    $(".tabs-2-triggers__item--active").removeClass("tabs-2-triggers__item");
    $(".tabs-2-content__item--active").removeClass("tabs-2-content__item");
    console.log("Сработало");

    $(this).removeClass("tabs-2-triggers__item--active");
    $($(this).attr("href")).removeClass("tabs-2-content__item--active");
  });

  //Эмуляция клика по кнопке
  // $(".tabs-2-triggers__item:first").click();
});
