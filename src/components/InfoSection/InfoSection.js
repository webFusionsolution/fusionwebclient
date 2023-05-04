import { useState } from 'react';
import IconsSection from './IconsSection';
import './InfoSection.css';
import ReachUs from './ReachUs';
import Services from './Services';

const InfoSection =()=>{
    const contacts = [
        {
            id: 1,
            title: "Reach Us",
            type: 'address',
            home: "Fusion Web",
            address: "J.C Bose Road, Subhash Pally,",
            location: "Siliguri,West Bengal",
            pincode: "Pincode - 734001",
            call: "+91 79086 20026",
            mail:"support@fusionwebsolutions.in"
        },
        {
            id:2,
          title: "Services",
          type: 'links',
          links: [
            {   
                name: "Web Development",
                link: '/services#webDevelopment'
            },
            {
                name: "Mobile App Development", 
                link: '/services#mobileAppDevelopment'
            },
            {
                name: "Wordpress Application", 
                link: '/services#wordpressApplication'
            },
            {
                name: "Search Engine Optimization", 
                link: '/services#seo'
            },
            {
                name: "Content Management", 
                link: '/services#contentManagement'
            }
          ]
        },
        {
            id:3,
            title: "Quick Links",
            type: 'links',
            links: [
              {   
                  name: "About Us",
                  link: '/about'
              },
              {
                  name: "Careers", 
                  link: '/careers'
              },
              {
                  name: "Privacy & Policy", 
                  link: '/privacy'
              },
              {
                  name: "Terms & Conditions", 
                  link: '/terms'
              },
              {
                  name: " Contact Us", 
                  link: 'contact'
              }
            ]
          }
       
     
    ]

    const [contactInfo, setContactInfo]= useState(contacts);
   return(
    <section className="info_section layout_padding">
            <div className="container info_content">
                <div>
                   <div className="row">
                      {
                        contactInfo.map((item)=>(
                            
                            item.type === 'address' ?                             
                            <ReachUs key={item.id} props={item}/>  
                            :
                            <Services key={item.id} props={item}/>    
                                                  
                          ))
                      }  
                    </div>
                   
                </div>
                <IconsSection />
            </div>
     </section>
   )

}

export default InfoSection;