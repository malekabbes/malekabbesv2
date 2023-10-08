"use client";
import Image from "next/image";
import "@/app/assets/css/socials.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const SocialsComponent = () => {
  const [shown, setShown] = useState(false);

  const modalBody = () => (
    <div
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        overflow: "hidden",

        /* Fixed position */
        left: 0,
        position: "fixed",
        top: 0,

        /* Take full size */
        height: "100%",
        width: "100%",

        /* Displayed on top of other elements */
        zIndex: 9999,
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#053B50",
          color: "#fff",
          display: "flex",
          padding: ".5rem",
        }}
      >
        <div style={{ marginRight: "auto" }}>
          Curriculum vitae - Malek ABBES
        </div>
        <button
          style={{
            backgroundColor: "#64CCC5",
            border: "none",
            borderRadius: "4px",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
          }}
          onClick={() => setShown(false)}
        >
          Close
        </button>
      </div>

      <iframe
        width="100%"
        height="800vh" // Adjust this value as needed
        src="https://malekabbes.fra1.cdn.digitaloceanspaces.com/cv.pdf"
      ></iframe>
    </div>
  );
  return (
    <div className="home-hero__socials">
      <div className="home-hero__social">
        <a
          href="https://www.linkedin.com/in/malekabbes/"
          className="home-hero__social-icon-link"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
            alt="Ram Maheshwari Linkedin Profile"
            className="home-hero__social-icon"
            width={30}
            height={30}
          />
        </a>
      </div>
      <div className="home-hero__social">
        <a
          href="https://twitter.com/Interextn"
          className="home-hero__social-icon-link"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg"
            alt="RammCodes Twitter Profile"
            className="home-hero__social-icon"
            width={30}
            height={30}
          />
        </a>
      </div>
 
      <div className="home-hero__social">
        <a
          href="https://github.com/rammcodes"
          className="home-hero__social-icon-link"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
            alt="RammCodes Github Profile"
            className="home-hero__social-icon"
            width={30}
            height={30}
          />
        </a>
      </div>

      <div className="home-hero__social">
        <a
          className="home-hero__social-icon-link resumeicon"
          rel="noreferrer"
          target="_blank"
          onClick={() => {
            setShown(true);
          }}
        >
          <Image
            src="https://malekabbes.fra1.cdn.digitaloceanspaces.com/resume.svg"
            alt="RammCodes DEV.to Blog Profile"
            className="home-hero__social-icon"
            width={30}
            height={30}
          />
        </a>
      </div>
      {shown && ReactDOM.createPortal(modalBody(), document.body)}
    </div>
  );
};

export default SocialsComponent;
