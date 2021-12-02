import React from "react";

const CartCard = ({ item }) => {
  const { title, description, image, price, id, rating: { rate } } = item;

  return (
    <div>
      <img src={image} alt={title} style={{ height: '179px', width: '222px' }} />
      {title}
      {/* {description} */}
      {price}
    </div>
  );
};

export default CartCard;
