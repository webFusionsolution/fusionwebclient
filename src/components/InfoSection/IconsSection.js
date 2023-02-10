 import { useState } from 'react';
import IconFormSection from './IconsFormSection';
import './IconsSection.css';

 const IconsSection =()=>{
    const links =[{
        link: " ",
        image: '/assets/fb.png'
    },
    {
        link: " ",
        image: '/assets/twitter.png'
    },
    {
        link: " ",
        image: '/assets/linkedin1.png'   
    },
    {
        link: " ",
        image: '/assets/instagram1.png'   
    }
]

const [linkSite, setLinkSite]=useState(links)
   return(
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
        <div className="social-box">
        {linkSite.map(item=>(

            <a href={item.link} key={item.image}>
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