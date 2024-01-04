import React, { useState } from 'react';
import axios from 'axios';


const EmailComponent = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    try {

      console.log("hiiii");

      await axios.post(`http://localhost:1200/api/v1/mail/send-email`, {
        to: email,
        subject,
        text: message,
      });
      alert('Email sent successfully!');
      const tripLink = generateTripLink();
      alert(`Email sent successfully! ${tripLink}`);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  const generateTripLink = () => {
    // כאן אתה יכול להוסיף לוגיקה שתייצר את הקישור לטיול באופן אוטומטי
    const tripLink = "הכתובת של הטיול האוטומטי"; // יש לשנות עם הלוגיקה המתאימה
    return tripLink;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4">Send Email</h2>
          <form>
            <div className="mb-3 mt-5">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control mx-3" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject:</label>
              <input type="text" className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={sendEmail}>Send Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailComponent;