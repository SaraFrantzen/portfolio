import React from "react";

const Contact = () => {
  return (
    <div className="ui main container">
      <h1 className="ui header" id="contact-header">
        Contact Me
      </h1>
      <div class="column">
      <img
        id="contact-img"
        src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      </div>
      <p>Fill in this form to send me a message. I will get back to you as soon as I read it!</p>








 <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
 <input type="hidden" name="form-name" value="contact" />
  <p>
    <label id="name">Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label id="email">Your Email: <input type="email" name="email" /></label>

  </p>
  <p>
    <label id="message">Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>






      

    </div>
  );
};

export default Contact;
