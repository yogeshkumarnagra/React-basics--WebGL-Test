import React, { useContext } from "react";
import AppContext from "../../context/Context";
import "./ThreeDModal.css";

export default function ThreeDModal() {
  const { isModalOpen } = useContext(AppContext);
  return (
    <>
      <div
        className={` threeDModal d-flex justify-center align-center w-100 p-absolute ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <div
          className={`sketchfab-embed-wrapper threeDModal justify-center align-center b-radius-28 ${
            isModalOpen ? "w-80 h-80" : "w-0 h-0"
          }`}
        >
          {" "}
          <iframe
            className="b-radius-28"
            title="Parts of a cell"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            src="https://sketchfab.com/models/cd9d5d3599204882a019bd10a0ab3f22/embed"
          >
            {" "}
          </iframe>
        </div>
      </div>
    </>
  );
}
