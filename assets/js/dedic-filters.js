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

let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText;
    select = this.closest(".select");
    currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

select();
