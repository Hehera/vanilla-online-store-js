import "./navigationLink.css";
import { router } from "/src/js/index.js";
export function getNavigationLink(path, title = "") {
  const link = document.createElement("a");
  link.href = path;
  link.classList.add("btn");
  link.textContent = title;

  link.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate(path);
  });

  return link;
}