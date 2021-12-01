import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchMainData } from "../redux/actions/mainPageActions";


const MainPage = ({ stock, loading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainData());
  }, []);
  if(loading) return <div>loading</div>
  return(
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {stock.map((item) => (<ProductCard item={item} />))}
    </div>
  );
};

const mapStateToProps = ({ mainPageReducer: { stock, loading, error } }) => ({
  stock,
  loading,
  error,
});

export default connect(mapStateToProps)(MainPage);
