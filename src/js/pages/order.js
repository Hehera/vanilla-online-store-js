import { getTitle } from "/src/js/components/main-title.js";
import { getDesc } from "/src/js/components/main-desc.js";
//Сторінка Каталога
export function getOrder() {
  const catalogContainer = document.createElement("div");
  catalogContainer.classList.add("container");
  const catalogTitle = getTitle("Оформлення");
  const catalogDesc = getDesc("Тут оформлення замовлення");
  catalogContainer.append(catalogTitle, catalogDesc);
  return catalogContainer;
}
