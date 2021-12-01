import React from "react";

const ProductCard = ({ item }) => {
  const { title, category, description, id, image, price, rating: { rate } } = item;
  return (
    <div style={{ width: '300px', padding: '3%' }}>
      <img src={image} style={{ width: '250px', height: '167px' }} />
      <h1>{title}</h1>
      <p>{rate}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
