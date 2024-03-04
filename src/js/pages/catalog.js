import { getTitle } from "/src/js/components/mainTitle/main-title.js";
import { getDesc } from "/src/js/components/mainDesc/main-desc.js";
//Сторінка Каталога
export function getCatalog() {
  const catalogContainer = document.createElement("div");
  catalogContainer.classList.add("container");
  const catalogTitle = getTitle("Каталог");
  const catalogDesc = getDesc("Недоступний");
  catalogContainer.append(catalogTitle, catalogDesc);
  return catalogContainer;
}