import React, { useState, useContext, useEffect } from "react";
import Star from "../../../images/icons/white-star.png";
import AppContext from "../../../context/Context";
import Image from "../image/Image";
import "./StarCard.css";

function StarCard({ randomNumber }) {
  const { setIsModalOpen, isModalOpen } = useContext(AppContext);
  const [currStarCard, setCurrStarCard] = useState(true);

  function cardClickHandler(e) {
    if (randomNumber.starKey === randomNumber.randomNumber) {
      e.stopPropagation();
      // setCurrStarCard(true);
    } else {
      setCurrStarCard(false);
    }
    setIsModalOpen(true);
  }
  useEffect(() => {
    return () => {
      setCurrStarCard(true);
    };
  }, [isModalOpen]);
  return (
    <>
      <div
        key={randomNumber.starKey}
        className="card starCard b-radius-28 d-flex justify-center align-center"
        onClick={cardClickHandler}
      >
        <div
          className={`card-inner ${currStarCard ? "" : "rotate-card"}`}
          id={randomNumber.starKey}
        >
          <div className="card-front">
            <Image
              imgSrc={Star}
              imgAlt="star icon"
              imgWidth="12px"
              imgHeight="12px"
            />
          </div>
          <div className="card-back">🪐</div>{" "}
        </div>
      </div>
    </>
  );
}

export default StarCard;
