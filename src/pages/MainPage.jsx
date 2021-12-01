import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchAllProducts, fetchMainData } from "../redux/actions/mainPageActions";


const MainPage = ({ stock, loading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainData(8));
    dispatch(fetchAllProducts());
  }, []);
  if(loading) return <div>loading</div>
  return(
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {stock.map((item) => (<ProductCard item={item} key={Math.random()} />))}
    </div>
  );
};

const mapStateToProps = ({ mainPageReducer: { stock, loading, error } }) => ({
  stock,
  loading,
  error,
});

export default connect(mapStateToProps)(MainPage);
