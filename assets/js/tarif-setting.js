function fun1() {
  var rng = document.getElementById("r1"); //rng - это ползунок
  var i1 = document.getElementById("i1"); // i1 - input
  i1.value = rng.value;
}

function fun2() {
  var rng = document.getElementById("r1"); //rng - это ползунок
  var i1 = document.getElementById("i1"); // i1 - input
  rng.value = i1.value;
}
const counter = function () {
  const btns = document.querySelectorAll(".counter-button");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector(".counter-input");
      const currentValue = +inp.value;
      let newValue;

      if (direction === "plus") {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
      inp.dispatchEvent(new Event("input")); // ДОБАВИЛ СЮДА ВЫЗОВ ONINPUT
    });
  });

  const btns2 = document.querySelectorAll(".disk-count-button");

  btns2.forEach((btn2) => {
    btn2.addEventListener("click", function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector(".dcb-input");
      const currentValue = +inp.value;
      let newValue;

      if (direction === "plus") {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    });
  });
};
counter();

var acc = document.getElementsByClassName("setting-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
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
