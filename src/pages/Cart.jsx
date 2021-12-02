import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Button from "../components/Button";
import CartCard from "../components/CartCard";
import { fetchAllCartItems } from "../redux/actions/checkoutActions";

const Cart = ({ items, products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCartItems(items))
  }, []);

  const total = products.reduce((a, { price }) => (a + price), 0).toFixed(2);

  const buyButtonProps = {
    name: 'Comprar',
    id: 'BuyButton',
    onClick: () => null,
  }

  return(
    <div>
      <div>
        {
          products.map((item) => (<CartCard item={item} key={Math.random()} />))
        }
      </div>
      <div>
        Total: R$: {total}
      </div>
      <Button />
    </div>
  );
};

const mapStateToProps = ({ checkoutPageReducer: { items, products } }) => ({
  items,
  products,
});

export default connect(mapStateToProps)(Cart);
