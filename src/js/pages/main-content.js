import { getTitle } from "/src/js/components/mainTitle/main-title.js";
import { getMainListItem } from "/src/js/components/mainList/list-item.js";
// Головна сторінка
export function getMainConent() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");

  const titleMain = getTitle("Головна сторінка");

  const WrapperlistMain = document.createElement("ul");
  WrapperlistMain.classList.add("wrapper__list", "list-reset");

  mainContainer.append(titleMain, WrapperlistMain);
  WrapperlistMain.append(
    getMainListItem("Item_1", 400),
    getMainListItem("Item_2", 600),
    getMainListItem("Item_3", 800)
  );

  return mainContainer;
}