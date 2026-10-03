document.getElementById("year")?.append(new Date().getFullYear());

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");
menuButton?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");
const resultCount = document.getElementById("result-count");
function selectFilter(category) {
  let visible = 0;
  filterButtons.forEach((button) => button.classList.toggle("is-selected", button.dataset.filter === category));
  productCards.forEach((card) => {
    const show = category === "all" || card.dataset.category === category;
    card.classList.toggle("is-hidden", !show);
    if (show) visible += 1;
  });
  if (resultCount) resultCount.textContent = `${visible} ürün`;
}
filterButtons.forEach((button) => button.addEventListener("click", () => selectFilter(button.dataset.filter)));
document.getElementById("clear-filter")?.addEventListener("click", () => selectFilter("all"));

document.querySelectorAll(".swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    document.querySelectorAll(".swatch").forEach((item) => item.classList.remove("is-selected"));
    swatch.classList.add("is-selected");
    const name = document.getElementById("color-name");
    if (name) name.textContent = swatch.dataset.color;
  });
});

document.getElementById("quote-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  alert(`Teklif özeti\n\nLuna Çıtalı Kapak\n${data.get("width")} × ${data.get("height")} mm\n${data.get("quantity")} adet\n\nİletişim yöntemi netleşince bu adım bağlanacak.`);
});
