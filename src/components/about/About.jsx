// import React, { useRef } from 'react';
// // import { PDFViewer, Document, Page } from '@react-pdf-viewer/pdfjs-dist';
// import { saveAs } from 'file-saver';
// import './about.css'
// import AboutImg from "../../assets/supic.jpeg"


// function About() {

//   const pdfRef = useRef();

//   const downloadPDF = () => {
//     const pdfPath = '../../assests/Sujith s Resume E7.pdf';

//     // Trigger the download
//     saveAs(pdfPath, 'document.pdf');

//     const { blob, url } = pdfRef.current.toBlob();
//     const link = document.createElement('a');
//     // link.href = url;
//     link.download = 'document.pdf';
//     link.click();
//   };

  
//   return (
//     <section className="about section" id="about">
//         <h2 className="section__title">About</h2><span className="section__subtitle">-------------</span>
        
//         <div className="about__container container grid">
//         <img src= {AboutImg} alt="" className='about__img'/>
//         <div className="about__data">
//             <p>
//         Hello, myself Sujith S  I’m a full stack developer Specialized in MERN. I have a strong understand over both front-end and back-end technologies, allowing me to build complete and scalable applications. On the front-end side, 
//         I specialize in HTML , CSS , BOOTSTRAP and JAVASCRIPT  i use   REACT  as a  framework. Moving to the back end, I’m proficient in server-side languages like NODE.JS and JAVA. I have clear under standing on MONGODB [database] and 
//         I can design efficient database structures and write optimized queries. I’m familiar with APIs and know how to integrate them into applications to enable seamless communication between the front end and back end. 
//         </p>
        
//         {/* <a href="" className="button button--flex"> CV
//         </a> */}
//         <button id='button23' onClick={downloadPDF}>Download PDF</button>

//         </div>
//         </div>
//     </section>
//   )
// }

// export default About



import React, { useRef } from 'react';
import { saveAs } from 'file-saver';
import { Worker, Viewer, Document, Page } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Make sure to import styles

import './about.css';
import AboutImg from "../../assets/supic.jpeg";
import PdfFile from "../../assets/Sujith s Resume E7.pdf";
import AboutImg1 from '../../assets/framehunt.jpeg'
function About() {
  const pdfRef = useRef();

  const downloadPDF = () => {
    saveAs(PdfFile, 'SujithsResumeE7.pdf');
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About</h2>
      <span className="section__subtitle">-------------</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className='about__img' />
        <div className="about__data">
          <p>
            Hello, myself Sujith S. I’m a full-stack developer specialized in MERN. I have a strong understanding of both front-end and back-end technologies, allowing me to build complete and scalable applications. On the front-end side, I specialize in HTML, CSS, BOOTSTRAP, and JAVASCRIPT; I use REACT as a framework. Moving to the back end, I’m proficient in server-side languages like NODE.JS and JAVA. I have a clear understanding of MONGODB [database], and I can design efficient database structures and write optimized queries. I’m familiar with APIs and know how to integrate them into applications to enable seamless communication between the front end and back end.
          </p>
          <button id='button23' onClick={downloadPDF}>Resume</button>
        </div>
      </div>
    </section>
  );
}

export default About;
