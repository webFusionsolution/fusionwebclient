import "./Topbar.css";
import React from "react";
import Social from '../Social/Social'

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="cols">
        <a href="mailto:support@fusionweb.in">
          {" "}
          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
          support@fusionweb.in
        </a>{" "}
        |
        <a href="tel:+917908620026">
          {" "}
          <i className="fa fa-phone" aria-hidden="true"></i> +91 79086 20026
        </a>
      </div>
      <div className="cols">
         <Social />
      </div>
      
    </div>
  );
};

export default Topbar;
