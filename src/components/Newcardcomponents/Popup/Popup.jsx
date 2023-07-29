import React from "react";
import { Link } from "react-router-dom";
import { Tyredataone } from "./AllDta";

function Popup({ trigger, setTrigger, product }) {
  return trigger ? (
    <div>
      <div className="popup-main">
        <div className="detail-and-close">
          <h3>Details</h3>
          <button className="clos-btn" onClick={() => setTrigger(false)}>
            close
          </button>
        </div>
        {/* <div className="image-price-btn">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/two-wheeler-tyre/h/i/k/p-br-50-tubetype-250-tube-120-80-r18-blaze-jk-tyre-original-imagpyhq4swtjyfs.jpeg?q=70"
          className="tyre-1-pic"
        />
        <span className="price-popup">₹3099</span>
        <span className="pricecut-popup">₹4999</span>
        <span className="off">38%</span>

        <Link to={"/Addcart"}>
          {" "}
          <button className="addcart-btn">ADD TO CART</button>
        </Link>
        </div>
        <div className="innerdetals">
          <h6 className="title-paragraph">
            JK TYRE 1B15214617066PR430BLAZE RYDR BR43 140/70-17 Rear Two Wheeler
            Tyre (Dual Sport, Street, Offroad Knobbies, Tube Less)
          </h6>
          <p className="desciption">
            It is the first Indian tyre manufacturer to make Radial tyres for an
            entire range of vehicles Truck/Bus, LCV, Passenger Cars, MUV and
            Tractors. JK Tyre was also the first to launch 'Eco-friendly - Green
            tyre' , 'Dual Contact - Aquasonic tyre' and 'High-Performance Tyres'
            for motorsport in India.
          </p>
          
        </div> */}
<div>
  <img src={product.img} className="tyre-1-pic" />
  <div className="pricing">
    <span className="real-price">{product.prices}</span>
    <span className="linecut">{product.pricecuts}</span>
    <span>{product.offs}</span>
    <Link to={"/cartnew"}><button className="addcart-btn">{product.btncarts}</button></Link>



  </div>
  <h3>{product.titles}</h3>
  <p>{product.paras}</p>


</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
