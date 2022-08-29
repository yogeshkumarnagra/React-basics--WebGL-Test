import React, { useContext } from "react";
import App from "../App";
import AppContext from "../context/Context";

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
          class={`sketchfab-embed-wrapper threeDModal justify-center align-center b-radius-28 ${
            isModalOpen ? "w-80 h-80" : "w-0 h-0"
          }`}
        >
          {" "}
          <iframe
            className="b-radius-28"
            title="Parts of a cell"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/cd9d5d3599204882a019bd10a0ab3f22/embed"
          >
            {" "}
          </iframe>
        </div>
      </div>
    </>
  );
}
