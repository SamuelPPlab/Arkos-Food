import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { fetchAllProducts, fetchMainData } from "../redux/actions/mainPageActions";
import Loading from "../images/Loading.gif";

const MainPage = ({ stock, loading, items }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainData(8));
    dispatch(fetchAllProducts());
  }, []);

  if(loading) return <img src={Loading} alt="Loading gif" style={{ paddingTop: '100px' }} />;

  return(
    <div>
      <Header location="main" quantity={items.length} />
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

const mapStateToProps = ({ mainPageReducer: { stock, loading, error }, checkoutPageReducer: { items } }) => ({
  stock,
  loading,
  error,
  items,
});

export default connect(mapStateToProps)(MainPage);
