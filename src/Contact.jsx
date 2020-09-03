import React from "react";
import UndrawMailbox from "react-undraw-illustrations/lib/components/UndrawMailbox";

const Contact = () => {
  return (
    <div className="ui main container">
      <h1 className="ui header" id="contact-header">
        Contact Information
      </h1>
      <div class="column">
        <UndrawMailbox primaryColor="#6c68fb" height="250px" />
      </div>
    </div>
  );
};

export default Contact;
