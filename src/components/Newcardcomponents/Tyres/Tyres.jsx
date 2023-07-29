import React, { useState } from "react";
import { Datas } from "../Popup/AllDta";
import Popup from "../Popup/Popup";

const Tyres = () => {
  const [btn, setbtn] = useState(false);
  const [product, setproduct] = useState();
  const onclickabout = (item) => {
    setbtn(true);
    setproduct(item);
  };
  return (
    <div>
      <div className="both-2-divs">
        <div className="total-tyre">
          <div className="tyre-items">
            {Datas.map((item) => (
              <div className="tyre-mapped">
                <center>
                  <img src={item.imag} className="tyre-1-pic" />
                </center>
                <div className="tyre-para">
                  <h6 >{item.title}</h6>
                  <span>{item.para}</span>
                </div>
                <div className="pricing">
                  <span>{item.price}</span>
                  <span>{item.pricecut}</span>
                  <span>{item.off}</span>

                </div>
                <button
                  onClick={() => onclickabout(item)}
                  className="btn-moredetail"
                >
                  MORE DETAILS
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="popup-effect-div">
          {" "}
          <Popup trigger={btn} setTrigger={setbtn} product={product} />
        </div>
      </div>
    </div>
  );
};

export default Tyres;
