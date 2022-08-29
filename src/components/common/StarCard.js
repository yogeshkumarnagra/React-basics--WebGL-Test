import React, { useContext } from "react";
import Star from "../../images/icons/white-star.png";
import AppContext from "../../context/Context";
import Image from "./Image";

function StarCard() {
  const { setIsModalOpen } = useContext(AppContext);
  return (
    <>
      <div
        className="starCard b-radius-28 d-flex justify-center align-center"
        onClick={(e) => {
          setIsModalOpen(true);
          e.stopPropagation();
        }}
      >
        <Image
          imgSrc={Star}
          imgAlt="star icon"
          imgWidth="12px"
          imgHeight="12px"
        />
      </div>
    </>
  );
}

export default StarCard;
