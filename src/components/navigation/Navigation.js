import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./navigation.css";
const Navigation = () => {
  return (
    <div>
      <div className="navigationContainer">
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
