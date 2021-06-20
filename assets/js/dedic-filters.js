function viewDiv() {
  if (document.getElementById("tab-2-1").style.display == "block") {
    document.getElementById("tab-2-1").style.display = "none";
    document
      .querySelectorAll(".tabs-2-triggers__item")
      .forEach((child) =>
        child.classList.remove("tabs-2-triggers__item--active")
      );
  } else {
    document.getElementById("tab-2-1").style.display = "block";
    document
      .querySelectorAll(".tabs-2-triggers__item")
      .forEach((child) => child.classList.add("tabs-2-triggers__item--active"));
  }
}

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
