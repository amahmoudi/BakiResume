import React from 'react';

const PDFViewer = () => {
const pdfURL = './static/CV_amahmoudi.pdf';
 return (
	<div className = "App">
          <a href = {pdfURL} target = "_blank">Download CV</a>
        </div>
 );
};
export default PDFViewer;