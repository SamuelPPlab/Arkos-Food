import React from "react";
import { Link } from "react-router-dom";
import ArkosFoodLogo from '../images/ArkosFoodLogo.png';
import SmallShoppingCart from '../images/SmallShoppingCart.png';

const Header = ({ location, quantity }) => {

  return(
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div>
        <img src={ArkosFoodLogo} alt="Arkos Food Logo" style={{ marginTop: '16px', marginLeft: '80px', position: 'absolute' }} />
      </div>
      <div style={{ display: 'flex', paddingTop: '30px', paddingRight: '10px' }}>
        <div style={{ paddingRight: '10px' }}>
          {
            location === 'main' && <div> {quantity} </div>
          }
          <Link to="/checkout" style={{ paddingRight: '1%', width: '31px', height: '31px' }}>
            <img src={SmallShoppingCart} alt="Small Shopping Cart" />
          </Link>
        </div>
        <div style={{ width: '500px', paddingTop: '10px' }}>
          Olá, Irineu da silva costa!
        </div>
      </div>
    </div>
  );
};

export default Header;
