import "./BannerSlider.css";
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from "react";
import Slide from "../Slide/Slide";

const BannerSlider = (props) => {
  // console.log(props.props)
  const [carouselItems, setCarouselItems] = useState(props.props);

  return (
    <>
     <Carousel>
    {
      carouselItems.map(item=>(  
          <Carousel.Item key={item.image}>
             <Slide props={item}/>
        </Carousel.Item>
      
      ))
    }
    </Carousel>
    </>
  )
}

export default BannerSlider;
