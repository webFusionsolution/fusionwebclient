import "./Services.css";
import ReachUs from "./ReachUs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = (props) => {
  const [quickLinks, setQuickLinks] = useState(props.props);
  //console.log(quickLinks.links)
  const [quickLinkService, setQuickLinkService] = useState(quickLinks.links);
  //console.log(quickLinkService)
  return (
    <div className="col-md-4">
      <div className="d-flex">
        <h5>{quickLinks.title}</h5>
      </div>
      <div className="d-flex ">
        <ul>
          {quickLinkService.map((item) => (
            <li key={item.name}>
              <Link to={item.link}>  {item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
