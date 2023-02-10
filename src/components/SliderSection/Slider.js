import "./Slider.css";
import Slide from "../Slide/Slide";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import BannerSlider from "../BannerSlider/BannerSlider";

const Slider = () => {
  const slider = [
    {
      title: "PROVIDES YOU THE BEST WEB SOLUTIONS",
      description:
        "WE ENCOURAGE YOU TO ALIGN WITH THE LATEST MARKET TREND, WE HELP YOU TO MAKE YOUR BRAND NOTICEABLE",
      linkBtn: "Read More",
      href: "services#webDevelopment",
      image: "/assets/pc-banner1.png",
      active: true,
    },
    {
      title: "WE PROVIDE THE BEST MOBILE AND WEB APPLICATIONS",
      description:
        "GET THE BEST INTERACTIVE EXPERIENCE WITH OUR RESPONSIVE WEB AND MOBILE APPLICATIONS.  THE FASTER YOUR APP, THE FASTER YOU GROW",
      linkBtn: "Read More",
      href: "services#webDevelopment",
      image: "/assets/pc-banner2.png",
      active: false,
    },
    {
      title: "WE OFFER BEST UI FRAMEWORK FOR YOUR APPLICATION",
      description:
        "WE USE THE BEST UI FRAMEWORKS FOR OUR WORK, WE BUILD AWSOME APPS USING ANGULAR, REACT AND VUE JS, JQUERY & WORKDPRESS",
      linkBtn: "Read More",
      href: "services#webDevelopment",
      image: "/assets/pc-banner3.png",
      active: false,
    },
  ];
  const [sliders, setSliders] = useState(slider);

  return (
    <section className="slider_section position-relative">
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
              <BannerSlider props={slider}/>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Slider;
