import "./Topbar.css";
import React from "react";
import Social from '../Social/Social'

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="cols">
        <a href="mailto:support@fusionweb.in.net">
          {" "}
          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
          support@fusionweb.in.net
        </a>{" "}
        |
        <a href="tel:+917908620026">
          {" "}
          <i className="fa fa-phone" aria-hidden="true"></i> +91 92894 41026
        </a>
      </div>
      <div className="cols">
         <Social />
      </div>
      
    </div>
  );
};

export default Topbar;
