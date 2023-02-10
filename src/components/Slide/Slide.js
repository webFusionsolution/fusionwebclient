import { useState } from 'react';
import './Slide.css';
import Carousel from 'react-bootstrap/Carousel';



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
                <a href={slide.href}>
                 {slide.linkBtn}
                </a>
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