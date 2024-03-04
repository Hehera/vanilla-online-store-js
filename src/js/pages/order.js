import { getTitle } from "/src/js/components/mainTitle/main-title.js";
//Сторінка Каталога
export function getOrder() {
  const orderContainer = document.createElement("div");
  orderContainer.classList.add("container");

  const orderTitle = getTitle("Оформлення");

  orderContainer.append(orderTitle);
  return orderContainer;
}
