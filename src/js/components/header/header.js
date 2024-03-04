import { router } from "/src/js/index.js";
import "./header.css";
// Шапка
export function getHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const containerHeader = document.createElement("div");
  containerHeader.classList.add("container");

  const navHeader = document.createElement("nav");
  navHeader.classList.add("header__nav");

  const link1 = document.createElement("a");
  link1.href = "/";
  link1.classList.add("btn");
  link1.textContent = "Головна сторінка";

  link1.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate('/');
  });

  const link2 = document.createElement("a");
  link2.href = "/catalog";
  link2.classList.add("btn");
  link2.textContent = "Каталог";

  link2.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate('/catalog')
  });

  const link3 = document.createElement("a");
  link3.href = "/basket";
  link3.classList.add("btn");
  link3.textContent = "Корзина";

  
  link3.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate('/basket');
  });

  header.append(containerHeader);
  containerHeader.append(navHeader);
  navHeader.append(link1, link2, link3);

  return header;
}
