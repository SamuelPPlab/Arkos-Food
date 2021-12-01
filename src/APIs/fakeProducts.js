export const fetchStock = (limit) => {
  const url = limit
    ? `https://fakestoreapi.com/products?limit=${limit}`
    : `https://fakestoreapi.com/products`;
  return fetch(url).then((r) => r.json());
};
