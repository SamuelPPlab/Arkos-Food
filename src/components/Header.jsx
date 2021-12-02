import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArkosFoodLogo from '../images/ArkosFoodLogo.png';
import SmallShoppingCart from '../images/SmallShoppingCart.png';
import ExitIcon from '../images/ExitIcon.png';
import PersonIcon from '../images/PersonIcon.png';

const Header = ({ location, quantity }) => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu)
  return(
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div>
        <img src={ArkosFoodLogo} alt="Arkos Food Logo" style={{ marginTop: '16px', marginLeft: '80px', position: 'absolute' }} />
      </div>
      <div style={{ display: 'flex', paddingTop: '30px', paddingRight: '10px' }}>
        <div style={{ paddingRight: '10px' }}>
          {
            location === 'main' && quantity > 0 && <div style={{ display: 'flex', flexDirection: 'row-reverse' }}> {quantity} </div>
          }
          <Link to="/checkout" style={{ paddingRight: '1%', width: '31px', height: '31px' }}>
            <img src={SmallShoppingCart} style={quantity === 0 ? { paddingTop: '20px' } : { color: 'black' }} alt="Small Shopping Cart" />
          </Link>
        </div>
        <div style={{ width: '500px', paddingTop: '35px', display: 'flex' }}>
          Olá <div onClick={() => setShowMenu(!showMenu)}>, Irineu da silva costa!</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
