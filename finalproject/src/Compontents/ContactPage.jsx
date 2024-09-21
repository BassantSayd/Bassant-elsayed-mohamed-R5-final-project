import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './ContactPage.css';
import './HomePage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle form submission (API call or other logic)
  };

  return (
    <div className='picture'>
      <img src="./images/scandinavian-interior-mockup-wall.png" alt="S" />
    <div className="contact-page">
      <h2>Get In Touch With Us</h2>
      <p className="intro-text">
        For More Information About Our Products & Services, Please Feel Free To Drop Us<br/>
        An Email. Our Team Always Strives To Help You Any Way We Can.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address<br/> 236 5th Avenue, New York, NY 10001</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone<br/>Mobile: +(84)546-6789<br/>Hotline: +(84)546-6789</p>
          <p><FontAwesomeIcon icon={faClock} /> Working Time<br/> Monday - Friday: 9:00 -<br/> 22:00<br/>Saturday - Sunday: 9:00 -<br/> 21:00</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className='formsname'>
            Your Name
          </label>
         
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        <label className='formsnames'>
           Email
          </label>
         
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
         <label className='formsnames'>
            Subject
          </label>
         
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />
       <label className='formsnames'>
           Message
          </label>
         
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;