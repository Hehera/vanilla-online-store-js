import { getTitle } from "/src/js/components/main-title.js";
import { getDesc } from "/src/js/components/main-desc.js";
//торінка Корзини
export function getBasket() {
  const basketContainer = document.createElement("div");
  basketContainer.classList.add("container");
  const basketTitle = getTitle("Корзина");
  const basketDesc = getDesc("Недоступна");
  basketContainer.append(basketTitle, basketDesc);
  return basketContainer;
}