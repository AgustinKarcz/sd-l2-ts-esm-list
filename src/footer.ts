export function footerComponent() {
  const footer = document.createElement("footer");
  footer.innerHTML = "<h1>Productos disponibles</h1>";
  footer.style.border = "solid 3px black";
  footer.style.padding = "12px";
  return footer;
}
