import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArkosFoodLogo from '../images/ArkosFoodLogo.png';
import SmallShoppingCart from '../images/SmallShoppingCart.png';
import ExitIcon from '../images/ExitIcon.png';
import PersonIcon from '../images/PersonIcon.png';
import "../CSS/header.css";

const Header = ({ location, quantity }) => {
  const [showMenu, setShowMenu] = useState(false);
  const arkosLogoProps = {
    id: 'ArkosLogo',
    src: ArkosFoodLogo,
    alt: 'Arkos Food Logo',
  };

  return(
    <div id="HContainer">
      <div>
        <img {...arkosLogoProps} />
      </div>
      <div style={{ display: 'flex', paddingTop: '30px', paddingRight: '10px' }}>
        <div style={{ paddingRight: '10px' }}>
          {
            location === 'main' && quantity > 0 && <div id="quantityContainer"><div id="productQuantity">
              {quantity}
            </div></div>
          }
          <div style={{ width: '50px'}}>
            <Link to="/checkout" >
              <img src={SmallShoppingCart} style={quantity === 0 ? { paddingTop: '25px' } : { paddingTop: location === 'Carrinho' && '25px', paddingRight: '15px' }} alt="Small Shopping Cart" />
            </Link>
          </div>
        </div>
        <div style={{ width: '500px', paddingTop: '40px' }}>
          <div onClick={() => setShowMenu(!showMenu)}>Olá, <span id="userName">Irineu da silva costa!</span></div>
          {
            showMenu && <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <Link to="/edit-profile"><img src={PersonIcon} alt="Edit Profile" /> Editar Perfil</Link>
              <Link to="/" ><img src={ExitIcon} alt="Exit" />SAIR</Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
