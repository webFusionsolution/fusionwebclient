import './contact.css';
import React from 'react'

const Contact = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [formStatus, setFormStatus] = React.useState('Send');
  const [message, setMessage] = React.useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...');
    setMessage(false);
    const { name, email, phone,  message } = e.target.elements
    let contactDetails = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }
    postSubmitData(e, contactDetails);
  }
  const postSubmitData = async (e, postObj) => {
    await fetch(BASE_URL+'/api/users/contact', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObj),
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        if(res){
          setFormStatus('Send');
          e.target.elements.email.value = "";
          e.target.elements.email.value = "";
          e.target.elements.phone.value = "";
          e.target.elements.message.value = "";
          setMessage(true)
        } else {
          setMessage(false)
        }

     });
  }
  return (
    <div className="content-section">
      <h1>Contact Us</h1>
      <div className='row'>
        <div className="col-6 mb-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14256.803369589428!2d88.439616!3d26.70603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x247b8f25117ef58f%3A0xd762ef2d7a30a7bf!2sFusion%20Web%20Solution!5e0!3m2!1sen!2sin!4v1676106255243!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-6 mb-3">
          <form onSubmit={onSubmit}>
            <h3>Send Your Query</h3>
            {message ?
              <p className='color-green'><strong>Thank you for submitting your query! We will get back to you on the same.</strong></p>
              : ''
            }
            
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
              <input className="form-control" type="number" id="phone" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-danger" type="submit">
              {formStatus}
            </button>
          </form>
        </div>

      </div>

    </div>
  )

}

export default Contact;