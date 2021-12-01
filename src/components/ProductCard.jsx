import React from "react";
import { useDispatch } from "react-redux";
import MiniShoppingCart from '../images/MiniShoppingCart.png';
import { addItemToCart } from "../redux/actions/checkoutActions";
import Button from "./Button";

const ProductCard = ({ item }) => {

  const dispatch = useDispatch();

  const { title, description, image, price, id, rating: { rate } } = item;
  const miniCartIMG = <img src={MiniShoppingCart} alt="Shopping cart" />;
  const priceText = <div>{miniCartIMG} {price}</div>

  const priceButtonProps = {
    name: priceText,
    onClick: () => dispatch(addItemToCart(id)),
    id: 'addToCartButton',
  };

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
      <Button {...priceButtonProps} />
    </div>
  );
};

export default ProductCard;
