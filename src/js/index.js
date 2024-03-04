import Navigo from 'navigo';
export const router = new Navigo('/');
import { getHeader } from "/src/js/components/header.js";

import { getMain } from "/src/js/components/main.js";
// import { getProduct } from "./pages/product.js";

const app = document.getElementById("app");

const header = getHeader();
const main = getMain();
// const product = getProduct()
// ---------------- 
router.on("/", async () => {
  main.innerHTML = ""
  const pageModuleMain = await import("/src/js/pages/main-content.js");
  const mainContent = pageModuleMain.getMainConent();
  main.append(mainContent);
});

router.on("/catalog", async () => {
  main.innerHTML = "";
  const pageModuleCatalog = await import("/src/js/pages/catalog.js");
  const catalog = pageModuleCatalog.getCatalog();
  main.append(catalog);
});

router.on("/basket", async () => {
  main.innerHTML = "";
  const pageModuleBasket = await import("/src/js/pages/basket.js");
  const basket = pageModuleBasket.getBasket();
  main.append(basket);
});

router.on("/order", async () => {
  if(true) {
    router.navigate('/')
    return
  }
  main.innerHTML = "";
  const pageModuleOrder= await import("/src/js/pages/order.js");
  const order = pageModuleOrder.getOrder();
  main.append(order);
});
// Сторінку не знайдено
router.notFound(async () => {
  main.innerHTML = "";
  const pageModuleNotFound = await import("/src/js/pages/notFound.js");
  const orderNotFound = pageModuleNotFound.getNotFoundPage();
  main.append(orderNotFound);
});

router.on("/product/:title", async ({ data }) => {
  console.log(data.title);
  main.innerHTML = "";
  const pageModuleProduct = await import("/src/js/pages/product.js");
  const product = pageModuleProduct.getProduct(data.title);
  main.append(product);
});
app.append(header);
app.append(main);

// app.append(product)

router.resolve();


