import { getTitle } from "/src/js/components/main-title.js";
//Сторінка NotFound
export function getNotFoundPage() {
  const orderContainer = document.createElement("div");
  orderContainer.classList.add("container");

  const orderTitle = getTitle("Сторінку не знайдено");

  orderContainer.append(orderTitle);
  return orderContainer;
}
