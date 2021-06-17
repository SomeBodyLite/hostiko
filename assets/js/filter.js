const list = document.querySelector(".country-list"),
  items_1 = document.querySelectorAll(".vps-tarif");
listItems = document.querySelectorAll(".country-list-item");

function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    if (target.classList.contains("country-list-item")) {
      listItems.forEach((listItem) => listItem.classList.remove("item-active"));
      target.classList.add("item-active");
    }

    switch (targetId) {
      case "all":
        getItems("vps-tarif");
        break;
      case "russia":
        getItems(targetId);
        break;
      case "germany":
        getItems(targetId);
        break;
      case "ukraina":
        getItems(targetId);
        break;
    }
  });
}
filter();

function getItems(className) {
  items_1.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
