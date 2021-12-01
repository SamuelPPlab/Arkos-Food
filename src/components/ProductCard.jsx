import React from "react";

const ProductCard = ({ item }) => {
  const { title, description, image, price, rating: { rate } } = item;
  return (
    <div style={{
      width: '300px',
      width: '298px',
      left: '0px',
      top: '0px',
      background: '#FCFCFC',
      borderRadius: '20px',
      filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(-2px -2px 4px rgba(0, 0, 0, 0.1))',
      marginBottom: '30px'
    }}>
      <img src={image} style={{ width: '250px', height: '167px' }} />
      <h1>{title}</h1>
      <p>{rate}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
