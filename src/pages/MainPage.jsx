import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
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

  const fullArkosLogo = <img src={ArkosFoodLogo} alt="Arkos Food Logo" style={{ marginTop: '16px', marginLeft: '80px', position: 'absolute' }} />;

  if(loading) return <div>loading</div>;

  return(
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div>
          {fullArkosLogo}
        </div>
        <div style={{ display: 'flex', paddingTop: '30px', paddingRight: '10px' }}>
          <div style={{ paddingRight: '10px' }}>
            <img src={SmallShoppingCart} alt="Small Shopping Cart" style={{ paddingRight: '1%', width: '31px', height: '31px' }} />
          </div>
          <div style={{ width: '500px', paddingTop: '10px' }}>
            Olá, Irineu da silva costa!
          </div>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
