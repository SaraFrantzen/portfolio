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
        <p>
          Fill in this form to send me a message. I will get back to you as soon
          as I read it!
        </p>

        
        <form name="contactForm" data-netlify="true" netlify onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" /> 
          <p>
            <label>
              Your Name:{" "}
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Contact;
