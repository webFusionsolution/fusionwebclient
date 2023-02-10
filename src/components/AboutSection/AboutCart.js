import "./AboutCart.css";
import { useState } from "react";

const AboutCart = (props) => {
  const [About_Cart, AboutCartSet] = useState(props.props);
 
  return (    
      <div className="about-detail">
        <div className="about_img-container">
          <div className="about_img-box">
            <img src={About_Cart.image} alt="" />
          </div>
        </div>
        <div className="card_detail-ox">
          <h4>{About_Cart.title}</h4>
          <p>{About_Cart.description}</p>
        </div>
      </div>
   
  );
};

export default AboutCart;
