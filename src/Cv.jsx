import React from "react";

/* import { Document, Page } from "react-pdf";
import CVpdf from "./src/pdf/cvSara.pdf";
 */

const Cv = () => {
  return (
    <div className="ui main container">
      <img
        id="cv-img"
        src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
      />
      <div class="column">
        <h1 className="ui header" id="cv-header">
          CV
        </h1>
        <p>My Resume</p>
      </div>
      <div class="ui stackable two column grid">
        <div class="column"></div>
      </div>
    </div>
  );
};

/* const Pdf = () => {
  return (
    <Document file={CVpdf}>
      <Page pageNumber={1} />
    </Document>
  );
};  */

export default Cv;
/* export default Pdf; */
