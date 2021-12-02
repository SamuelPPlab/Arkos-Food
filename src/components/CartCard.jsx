import React from "react";
import Button from "./Button";
import TrashCan from "../images/TrashCan.png";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/actions/checkoutActions";
import RatingStars from "./RatingStars";

const CartCard = ({ item }) => {
  const { title, description, image, price, id, key, rating } = item;

  const dispatch = useDispatch();

  const trashCanIMG = <img src={TrashCan} alt="Trash Can Icon" />;

  const removeItemFromCartButtonProps = {
    name: trashCanIMG,
    id: 'RemoveItemFromCart',
    onClick: () => dispatch(removeItemFromCart(key)),
  };

  return (
    <div>
      <img src={image} alt={title} style={{ height: '179px', width: '222px' }} />
      <Button {...removeItemFromCartButtonProps} />
      {title}
      <div>
        <RatingStars rating={rating} />
      </div>
      {description}
      <div>
        R$ {price}
      </div>
    </div>
  );
};

export default CartCard;
