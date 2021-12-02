import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import ArkosFoodLogo from '../images/ArkosFoodLogo.png';
import SmallShoppingCart from '../images/SmallShoppingCart.png';
import { fetchAllProducts, fetchMainData } from "../redux/actions/mainPageActions";

const MainPage = ({ stock, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainData(8));
    dispatch(fetchAllProducts());
  }, []);

  if(loading) return <div>loading</div>;

  return(
    <div>
      <Header />
      <div>
        <SearchBar />
      </div>
      <h1 style={{ paddingLeft: '80px', paddingTop: '50px', paddingBottom: '30px' }}>Produtos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '1400px', marginLeft: '80px' }}>
        {stock.map((item) => (<ProductCard item={item} key={Math.random()} />))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ mainPageReducer: { stock, loading, error } }) => ({
  stock,
  loading,
  error,
});

export default connect(mapStateToProps)(MainPage);
