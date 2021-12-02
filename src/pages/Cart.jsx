import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import CartCard from "../components/CartCard";
import { fetchAllCartItems } from "../redux/actions/checkoutActions";

const Cart = ({ items, products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCartItems(items))
  }, []);
  console.log(products)

  const total = products.reduce((a, { price }) => (a + price), 0).toFixed(2);

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
    </div>
  );
};

const mapStateToProps = ({ checkoutPageReducer: { items, products } }) => ({
  items,
  products,
});

export default connect(mapStateToProps)(Cart);
