import './Whosection.css';

const WhoSection =()=>{
   return(
    <section className="who_section">
    <div className="container who_container">
      <div className="who_img-box">
        <img src="/assets/pc.jpg" alt="" />
      </div>
      <div className="who_deail-box">
        <h2>
          WHO ARE WE
        </h2>
        <p>
          With 5+ years of experience in providing End to End customized Solutions and Services, our brand character is customized, professional, immediate, helpful and up-to-date with the latest technology developments.

We operate from the heart of India, New Delhi. We have an experienced team of designers and developers who are among the best in their related fields.  We don’t just want to build your website – we want to help build your business. We create high-quality websites and marketing to help your business thrive online.
        </p>
        <div>
          <a href="/about">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>

   )


}

export default WhoSection;