import { useState } from 'react';
import './Slide.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



const Slide =(props)=>{
  
  const [slide, setSlide] = useState(props.props);
    return(       
        // <div className="carousel-item">
        <div className="slider_item-box">
          <div className="slider_item-container">
            <div className="slider_item-detail">
              <h1>
                {slide.title}
              </h1>
              <p>
               {slide.description}
              </p>
              <div>
                <Link  to={slide.href}>{slide.linkBtn}</Link>               
              </div>
            </div>
            <div className="slider_item-imgbox">           
              <img src={slide.image} alt="" />
            </div>
          </div>
        </div>
        // </div>
     
    )

}


export default Slide;