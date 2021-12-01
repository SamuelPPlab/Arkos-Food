export const fetchStock = () => {
  const url = 'https://fakestoreapi.com/products?limit=8';
  return fetch(url).then((r) => r.json());
};
