import React from "react";
import { Link } from "react-router-dom";
import ForwardArrow from '../images/ForwardArrow.png';

const NavigationBar = ({ currentPage }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Link to="/main">
        Página Inicial
      </Link>
      <img src={ForwardArrow} alt="Forward Arrow" />
      {currentPage}
    </div>
  );
};

export default NavigationBar;
