import React from 'react'
import './Contact.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div id='contact' >
    <h2>Contact Me</h2>
    <div className="contact-container">
     
      <div className="contact-info">
        <h3>Contact Details</h3>
        <p><strong>📍 </strong><span> Pimpri-Chinchwad, Pune, India</span></p>
        <p><strong>📧 </strong> <a href="mailto:akshinde023@gmail.com">akshinde023@gmail.com</a></p>
        <p><strong>📞 </strong> <a href="tel:+917796593068">+917796593068</a></p>
      </div>

      
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <h3>Send a Message</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="7" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact