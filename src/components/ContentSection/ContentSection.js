import ContentImageBox from './ContentImageBox';
import './ContentSection.css';
import Form from './Form';


const ContentSection =()=>{
  return(
    <section className="contact_section ">
       <div className="container d-flex justify-content-center">
            <h2 className="text-uppercase">
               Get in touch
            </h2>
      </div>
      <div className="container-fluid layout_padding-top">
        <div className="row">
            {/* <ContentImageBox />
            <Form />   */}
        </div>
      </div>
    </section>


  )

}


export default ContentSection;