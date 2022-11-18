// contact.tsx
// Roman Lysenko - Assignment2 Mini Portfolio in React
// Contact page content
import React, { ChangeEvent, useEffect, useState } from 'react';

function Contact()
{
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() =>{
      document.title = "Contact";
  },[]);

  function onChangeFullName(e: ChangeEvent<HTMLInputElement>)
  {
      setFullName(e.target.value);
      console.log(fullName);
  }

  function onChangeContactNumber(e: ChangeEvent<HTMLInputElement>)
  {
      setContactNumber(e.target.value);
      console.log(contactNumber);
  }

  function onChangeEmailAddress(e: ChangeEvent<HTMLInputElement>)
  {
      setEmailAddress(e.target.value);
      console.log(emailAddress);
  }

  function onChangeMessage(e: ChangeEvent<HTMLTextAreaElement>)
  {
      setMessage(e.target.value);
      console.log(message);
  }

  function onSubmitForm(e: any)
  {
      e.preventDefault();
      console.log(fullName);
      console.log(contactNumber);
      console.log(emailAddress);
      console.log(message);
  }

    return(
        <div className="container">
        <h1>Contact Me</h1>
        <hr></hr>
        <br></br>
        <section className="contactPage row justify-content-lg-center g-3">
        <form className="col-lg-8 col-md-6 col-sm-10" onSubmit={onSubmitForm}>

          <div className="form-group mb-3">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" id="fullName" name="fullName" onChange={onChangeFullName} onBlur={onChangeFullName}aria-describedby="Full Name Input" placeholder="Enter Full Name"/>
          </div>

          <div className="form-group mb-3">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="tel" className="form-control" id="contactNumbere" name="contactNumber" onChange={onChangeContactNumber} onBlur={onChangeContactNumber}aria-describedby="Contact Number Input" placeholder="Enter Contact Number"/>
          </div>

          <div className="form-group mb-3">
              <label htmlFor="emailAddress">Email address</label>
              <input type="email" className="form-control" id="emailAddress" name='emailAddress' onChange={onChangeEmailAddress} onBlur={onChangeEmailAddress}aria-describedby="Email Address Input" placeholder="Enter Email"/>
          </div>

          <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" aria-label="Message Area" onChange={onChangeMessage} onBlur={onChangeMessage}></textarea>
          </div>

          <button type="submit" id="submitButton" className="btn btn-primary me-3"><i className="fas fa-envelope fa-lg"></i> Submit</button>
          <button type="reset" id="cancelButton" className="btn btn-warning"><i className="fas fa-undo fa-lg"></i> Cancel</button>
          <p>Output is shown in the console (Ctrl+Shift+J) or F12</p>
        </form>
        </section>
    </div>
    );
}

export default Contact;