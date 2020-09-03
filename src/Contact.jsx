import React from "react";
import UndrawMailbox from "react-undraw-illustrations/lib/components/UndrawMailbox";

const Contact = () => {
  return (
    <div className="ui main container">
      <h1 className="ui header" id="contact-header">
        Contact Me
      </h1>
      <div class="column">
        <UndrawMailbox primaryColor="#6c68fb" height="250px" />
      </div>
      <p>Fill in this form to send me a message. I will get back to you as soon as I read it!</p>


     <form name="contact" method="POST" data-netlify="true">
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
