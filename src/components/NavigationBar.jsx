import React from "react";
import { Link } from "react-router-dom";
import ForwardArrow from '../images/ForwardArrow.png';
import "../CSS/navigation.css";

const NavigationBar = ({ currentPage }) => {
  const rightArrowStyle = {
    width: '8px',
    height: '13px',
    paddingRight: '40px',
    paddingLeft: '40px',
    marginTop: '8px',
  };

  const navContainer = {
    display: 'flex',
    paddingLeft: '80px',
    paddingTop: '25px',
    paddingBottom: '40px',
  };

  return (
    <div style={navContainer}>
      <Link id="backToMain" to="/main">
        Página Inicial
      </Link>
      <img style={rightArrowStyle} src={ForwardArrow} alt="Forward Arrow" />
      {currentPage}
    </div>
  );
};

export default NavigationBar;
