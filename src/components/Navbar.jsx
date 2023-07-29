import React from "react";
import carlogopic from "./photos/auto-car-logo-template-vector-icon.jpg"
import cart from "./photos/cartimg.jpg"
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="main-nav">
        <div className="navmain">
    <Link to={"/home"} >      <img src={carlogopic} className="carlogopic" /></Link>
          <div className="textplace">
            <h1 className="headtext">SPARE <span  className="colorchange" >WORLD</span> </h1>
            <input
              placeholder="search for spare"
              className="place"
              type="text"
            />
          </div>
        </div>



   <Link to={"/cart"} >     <div className="cartblock">
          <img src={cart} className="cartimg" /> cart
        </div></Link>



      </div>
      <Outlet/>
    </div>
  );
};

export default Navbar;
