 import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReachUs.css';

 const ReachUs =(props)=>{
   
    const [info, setInfo]= useState(props.props);
    
      return(
        <div className="col-md-4">
            <div className="d-flex">
                <h5>
                  {info.title}
                </h5>
              </div>
              <div className="d-flex ">
              <ul>
              <li>             
              <Link to={'/contact'}><i className="fa fa-home" aria-hidden="true">&nbsp;               
              </i>
              { info.home} <br />
                {info.address} <br />
                {info.location} <br />
                {info.pincode} <br />
                {info.call} <br />
                {info.mail}
                </Link>
              </li>
              </ul>
              </div>
        </div>

        
      )

 }


 export default ReachUs;