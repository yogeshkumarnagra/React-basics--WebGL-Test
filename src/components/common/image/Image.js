import React from "react";
import "./Image.css";

export default function Image({
  imgSrc,
  imgAlt,
  imgWidth = "100%",
  imgHeight = "100%",
}) {
  return (
    <>
      <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
    </>
  );
}
