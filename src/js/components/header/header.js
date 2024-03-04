import "./header.css";
import { router } from "/src/js/index.js";
import { getNavigationLink } from "/src/js/components/NavigationLink/navigationLink.js";

// Шапка
export function getHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const containerHeader = document.createElement("div");
  containerHeader.classList.add("container");

  const navHeader = document.createElement("nav");
  navHeader.classList.add("header__nav");

  let link1 = getNavigationLink("/", "Головна сторінка");

  let link2 = getNavigationLink("/catalog", "Каталог");

  let link3 = getNavigationLink("/basket", "Корзина");
  

  header.append(containerHeader);
  containerHeader.append(navHeader);
  navHeader.append(link1, link2, link3);

  return header;
}
