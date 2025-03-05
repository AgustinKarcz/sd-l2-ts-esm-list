import productsList from "./products.json" with { type: "json" };
export function getProductSortedByPrice(productos) {
  return productos.sort((a, b) => a.price - b.price);
}
