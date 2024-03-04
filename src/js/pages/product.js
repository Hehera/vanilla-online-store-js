import { getDesc } from "/src/js/components/mainDesc/main-desc.js";
import { getTitle } from "/src/js/components/mainTitle/main-title.js";

export function getProduct(title) {
  const productContainer = document.createElement("div");
  productContainer.classList.add("container");

  const productTitle = getTitle(title);
  const productDesc = getDesc("Недоступно");

  productContainer.append(productTitle, productDesc);
  return productContainer;
}
