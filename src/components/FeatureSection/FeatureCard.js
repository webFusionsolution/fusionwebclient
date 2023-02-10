import './FeatureCard.css';
import { useState } from "react";



const Feature =(props)=>{
 
  const [aboutCard, setAboutCard]= useState(props.props)
   return(       
        <div className="feature_card">
          <div className="feature_img-container">
             <div className="feature_img-box">
                <img src={aboutCard.image} alt="" />
              </div> 
          </div>  
          <div className="feature_detail-box">
              <h4>
               {aboutCard.title}
              </h4>
              <p>
               {aboutCard.description}
              </p>
            </div> 
        </div>    

   )

}


export default Feature;