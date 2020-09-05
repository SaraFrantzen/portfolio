import React, { Component } from "react";

class Contact extends Component {
  state = { name: "", email: "", message: "" };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="ui main container">
        <div class="column">
          <img
            id="contact-img"
            src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <h1 className="ui header" id="contact-header">
            Contact Me
          </h1>
        </div>
        <p id="contact-txt">
          Fill in this form to send me a message. I will get back to you as soon
          as I read it!
        </p>
      
        
        <div class ="ui form" name="contactForm" data-netlify="true" netlify onSubmit={this.handleSubmit}>
        
        {/* <input type="hidden" name="form-name" value="contact" />  */}
          <div class="two fields">
            <div class="field">
            <label id="name">
               Name:{" "} </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Your Name"
              />
           </div>
           <div class="field">
            <label id="email">
               Email:{" "} </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Your Email"
              />
           
            </div>
            </div>

            <div class="field">
            <label id="message">
              Message:{" "}
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
                placeholder="message"
              />
            </label>
            </div>
         
            <div class="ui animated button" type="submit" id="contact-button" tabindex="0">
                    <div class=" visible content">Send</div>
                    <div class="hidden content">
                     <i class="purple envelope outline icon"></i>
                   </div>
                   </div>

        
         </div>
         </div>
    
    );
  }
}

export default Contact;
