export const fetchStock = () => {
  const url = 'https://fakestoreapi.com/products';
  return fetch(url).then((r) => r.json());
};
