import "./mainList.css";
import { router } from "/src/js/index.js";

// Вміст товару
export function getMainListItem(title, price) {
  const itemMain = document.createElement("li");
  itemMain.classList.add("list__item");

  const listItemTitle = document.createElement("h2");
  listItemTitle.classList.add("list__title");

  // сторінка вибраного товара
  let productLink = document.createElement('a')
  productLink.textContent = title;
  productLink.href = '/product'

  productLink.addEventListener('click',function (event){
      event.preventDefault()
      router.navigate(`/product/${title}`)
  })

  listItemTitle.append(productLink)

  const listItemPrice = document.createElement("strong");
  listItemPrice.classList.add("list__price");
  listItemPrice.textContent = `${price} грн`;

  const listItemBtn = document.createElement("button");
  listItemBtn.classList.add("btn","list__btn");
  listItemBtn.textContent = 'В Корзину';

  itemMain.append(listItemTitle,listItemPrice,listItemBtn)

  return itemMain;
}