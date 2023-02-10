import "./About.css";

import AboutCart from "./AboutCart";
import { useState } from "react";

const About = () => {
  const about = [
    {
      image: "/assets/work1.png",
      title: "WELL DOCUMENTED",
      description:
        " A cornerstone of good code is maintainability, achieved through understandable, legible documentation. There are multiple ways of documenting code: choosing good names for variables and functions. leaving brief comments within the code to help give context to future readers",
    },
    {
      image: "./assets/work2.png",
      title: "FULLY RESPONSIVE",
      description:
        " Responsive web design offers a more fluid approach adapting the website to the size of the screen, and it does not matter what the target device is. It does so by using CSS media queries and changing the style, display type, width, height, etc., for the specific device every time.",
    },
    {
      image: "./assets/work3.png",
      title: "ANALYTICS",
      description:
        "Monitor your website performance with our simplified data dashboard. With real time traffic statistics, trend charts and our Google Analytics integration, you can stay on top of your website's performance.",
    },
  ];

  const [aboutCart, setAboutCart] = useState(about);

  return (
    <section className="about_section layout_padding">
      <div className="container">
        <h2 className="text-uppercase">How it works</h2>
      </div>

      <div className="container">
        <div className="about_card-container layout_padding2-top">
          {aboutCart.map((item) => (
            <AboutCart key={item.image} props={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
