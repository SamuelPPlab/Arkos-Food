import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { fetchAllCartItems } from "../redux/actions/checkoutActions";

const Cart = ({ items, products }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(items)
    dispatch(fetchAllCartItems(items))
  }, []);
  return(
    <div>
      irineu
    </div>
  );
};

const mapStateToProps = ({ checkoutPageReducer: { items, products } }) => ({
  items,
  products,
});

export default connect(mapStateToProps)(Cart);
