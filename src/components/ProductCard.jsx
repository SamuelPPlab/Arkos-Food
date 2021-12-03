import React from "react";
import { useDispatch } from "react-redux";
import MiniShoppingCart from '../images/MiniShoppingCart.png';
import RatingStars from './RatingStars';
import { addItemToCart } from "../redux/actions/checkoutActions";
import Button from "./Button";
import "../CSS/cards.css";

const ProductCard = ({ item }) => {
  const { title, description, image, price, id, rating } = item;

  const dispatch = useDispatch();

  const miniCartIMG = <img src={MiniShoppingCart} alt="Shopping cart" style={{ paddingRight: '10px' }} />;
  const priceText = <div id="priceText">{miniCartIMG}  R$ {price.toFixed(2)}</div>

  const priceButtonProps = {
    name: priceText,
    onClick: () => dispatch(addItemToCart(id)),
    id: 'buttonAddToCart',
  };

  return (
    <div className="productCardContainer">
      <img src={image} style={{ width: '250px', height: '167px' }} />
      <h1 className="paddingAround">{title}</h1>
      <RatingStars rating={rating} />
      <p className="paddingAround" id="description">{description}</p>
      <Button {...priceButtonProps} />
    </div>
  );
};

export default ProductCard;
