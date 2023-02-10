import './contact.css';

const Contact = () => {
  return (
    <div className="content-section">
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <img src="/assets/contactus.jpg" alt="" />
        </div>
        <div className="col-md-6">
          <form className='contact_us'>

            <label htmlFor="text"> First Name</label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              className="fstName"
            /> <br />
            <label htmlFor="text"> Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              className="lstName"
            /> <br />
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              placeholder="Entered Email"
              id="email"
              className="mail"
            /> <br />
            <label htmlFor="textarea"> Message</label>
            <textarea
              placeholder="Your Message"
              id="message"
              className="msg"

            /> <br />
            <button type="button" id="btn">
              Submit
            </button>

          </form>

        </div>




      </div>
    </div>
  )

}

export default Contact;