import React, { useContext } from "react";
import App from "../App";
import AppContext from "../context/Context";

export default function ThreeDModal() {
  const { isModalOpen } = useContext(AppContext);
  return (
    <>
      <div
        class={`sketchfab-embed-wrapper threeDModal b-radius-28 p-absolute ${
          isModalOpen ? "w-80" : "w-0"
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
    </>
  );
}
