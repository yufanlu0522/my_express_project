import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import Footer from "../Components/common/footer";

import samplePDF from '../Data/resume.pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./styles/resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div className="page-content">
      <div className="content-wrapper">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px', marginBottom: '150px'}}>
        <Document
          file={samplePDF}
        >
          <Page pageNumber={1} size="A4" renderAnnotationLayer={false}/>
        </Document>
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Resume