import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/umd/entry.webpack';
import resume from "../assets/images/jennifer_nelson_full_stack_resume.pdf";
import Navheader from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import "../css/Resume.css";


pdfjs.GlobalWorkerOptions.workerSrc="pdf.worker.js";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function onDocumentLoadError(error){
    console.log("error while loading document! ", error.message)
  }

  function changePage(offset) {
      setPageNumber(prevPageNumber=> prevPageNumber + offset);
  };

  function previousPage(){
      changePage(-1);
  };

  function nextPage(){
      changePage(1)
  };

  return (
    <>
    <Navheader/>
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className="mt-5 window container"
      >
      <h1 className="pageTitles">Resume</h1>
          <hr></hr>
        <Page pageNumber={pageNumber}/>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="mb-5 btn btn-style-resume rounded-0"
        >
          ‹
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          className="mb-5 btn btn-style-resume rounded-0"
        >
          ›
        </button>
      
   
      </Document>
      <Footer/>
    </>
  );
}

export default Resume;