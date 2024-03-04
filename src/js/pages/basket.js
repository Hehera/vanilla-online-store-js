import { router } from "/src/js/index.js";
import { getTitle } from "/src/js/components/mainTitle/main-title.js";
import { getDesc } from "/src/js/components/mainDesc/main-desc.js";
//торінка Корзини
export function getBasket() {
  const basketContainer = document.createElement("div");
  basketContainer.classList.add("container");
  const basketTitle = getTitle("Корзина");
  const basketDesc = getDesc("Недоступна");


  // Кнопка оформлення
  const orderLink = document.createElement("a");
  orderLink.href = "";
  orderLink.classList.add("btn");
  orderLink.textContent = "Оформити замовлення";

  orderLink.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate('/order');
  });


  basketContainer.append(basketTitle, basketDesc,orderLink);
  return basketContainer;
}