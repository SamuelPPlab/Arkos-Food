import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CartCard from "../components/CartCard";
import { clearShoppingCart, fetchAllCartItems } from "../redux/actions/checkoutActions";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import "../CSS/cards.css";

const Cart = ({ items, products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCartItems(items))
  }, []);

  const total = products.reduce((a, { price }) => (a + price), 0).toFixed(2);

  const buyButtonProps = {
    name: 'Comprar',
    id: 'BuyButton',
    onClick: () => dispatch(clearShoppingCart()),
  };

  return(
    <div>
      <Header location="Carrinho" />
      <NavigationBar currentPage="Carrinho" />
      <div>
        {
          products.map((item) => (<CartCard item={item} key={Math.random()} />))
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-40px', marginRight: '-240px' }}>
        <pre id="total">TOTAL       <span id="bill"> R$ {total}</span></pre>
      </div>
      <Link to="/main" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '560px' }}>
        <Button {...buyButtonProps} />
      </Link>
    </div>
  );
};

const mapStateToProps = ({ checkoutPageReducer: { items, products } }) => ({
  items,
  products,
});

export default connect(mapStateToProps)(Cart);
