 import { useState } from 'react';
import IconFormSection from './IconsFormSection';
import './IconsSection.css';

 const IconsSection =()=>{
    const links =[{
        link: "https://www.facebook.com/profile.php?id=100090481633388",
        image: '/assets/fb.png'
    },
    {
        link: "https://twitter.com/FusionWebSL",
        image: '/assets/twitter.png'
    },
    {
        link: "https://www.linkedin.com/in/fusionweb-solution-03091126a/",
        image: '/assets/linkedin1.png'   
    },
    {
        link: "https://www.instagram.com/fusionwebsols/",
        image: '/assets/instagram1.png'   
    }
]

const [linkSite, setLinkSite]=useState(links)
   return(
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
        <div className="social-box">
        {linkSite.map(item=>(
            <a href={item.link} key={item.image} target="_blank">
            <img src={item.image} key={item.image} alt="" />
          </a>

         ))
        
        }
        </div>
        <IconFormSection />
    </div>
   )

 }

 export default IconsSection;