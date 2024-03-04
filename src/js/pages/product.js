import { getDesc } from "/src/js/components/main-desc"
import { getTitle } from "/src/js/components/main-title"

export function getProduct(title) {
  const productContainer = document.createElement("div");
  productContainer.classList.add("container");

  const productTitle = getTitle(title);
  const productDesc = getDesc("Недоступно");

  productContainer.append(productTitle, productDesc);
  return productContainer;
}
