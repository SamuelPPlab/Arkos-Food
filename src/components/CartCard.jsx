import React from "react";
import Button from "./Button";
import TrashCan from "../images/TrashCan.png";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/actions/checkoutActions";
import RatingStars from "./RatingStars";
import "../CSS/cards.css";

const CartCard = ({ item }) => {
  const { title, description, image, price, id, key, rating } = item;

  const dispatch = useDispatch();

  const trashCanIMGProps = {
    onClick: () => dispatch(removeItemFromCart(key, id)),
    src: TrashCan,
    alt: 'Trash Can Icon',
    id: 'trashCanIMG',
  };

  return (
    <div id="checkoutCardContainer">
      <div style={{ width: '220px', height: '180px' }}>
        <img id="checkoutImage" src={image} alt={title} style={{ height: '179px', width: '222px' }} />
      </div>
      <div style={{ width: '750px', marginLeft: '-100px' }}>
        <h1 id="title">{title}</h1>
        <div>
          <RatingStars rating={rating} />
        </div>
        <p id="description">{description}</p>
      </div>
      <div style={{ width: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ width: '100%', height: '60px' }}>
          <img {...trashCanIMGProps} />
        </div>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '10px' }}>
          <span id="price">R$ {price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
