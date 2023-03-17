import "./Hero.css";
import Slider from "../SliderSection/Slider";
import React from "react";
const Hero = (props) => {
  const myInput = React.useRef(null);
  const [counter, setCounter] = React.useState(0);

  function abc() {     
     // const input = document.querySelector('#one'); // myInput
      alert(myInput.current.value)
  }

  return (
    <div className="hero_area">
      <Slider counter="props.isTodayFriday"/>
      <input id="one" type="text" ref={myInput}/>
      <button onClick={abc}></button>
    </div>
  );
};

export default Hero;
