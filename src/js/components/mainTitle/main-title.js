import "./mainTitle.css";
export function getTitle(text) {
  const title = document.createElement('h1');
  title.classList.add("title");
  title.textContent = text;
  return title;
}