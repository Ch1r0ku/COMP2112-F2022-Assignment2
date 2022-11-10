import React from 'react';

function Contact()
{
    return(
        <div className="container">
        <h1>Contact Me</h1>
        <hr></hr>
        <br></br>
        <section className="contactPage">
            <form name="contactForm">
                <div className="mb-3">
                  <label htmlFor='inputName' className="form-label">Your Full Name</label>
                  <input placeholder="John Doe" type="text" className="form-control" id="inputName" aria-describedby="NameHelp"/>
                  <div id="NameHelp" className="form-text">This is confidential, only the owner will see the message</div>
                </div>
                <div className="mb-3">
                  <label htmlFor='inputNumber' className="form-label">Contact Number</label>
                  <input placeholder="1234567890" type="phone" className="form-control" id="inputNumber"/>
                </div>
                <div className="mb-3">
                    <label htmlFor='inputMessage' className="form-label">Your Message</label>
                    <textarea id="inputMessage" className="form-control" aria-label="With textarea"></textarea>
                </div>
                <button id="submitbutton" type="submit" className="btn btn-success">Submit</button>
              </form>
              <p id="formMessage"></p>
        </section>
    </div>
    );
}

export default Contact;