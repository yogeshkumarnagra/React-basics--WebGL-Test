import React, { useContext, useEffect } from "react";
import StarCard from "../starCard/StarCard";
import AppContext from "../../../context/Context";
import "./cards.css";

function Cards() {
  const { cards, isModalOpen, randomNumber } = useContext(AppContext);
  useEffect(() => {}, [isModalOpen]);
  return (
    <div
      id="cards"
      className={`cards d-flex justify-center f-wrap h-fit w-100
      ${isModalOpen ? "hidden" : ""} `}
    >
      {cards.length > 0 &&
        cards.map((card, i) => {
          return (
            <>
              <StarCard key={i} randomNumber={{ randomNumber, starKey: i }} />
            </>
          );
        })}
    </div>
  );
}

export default Cards;
