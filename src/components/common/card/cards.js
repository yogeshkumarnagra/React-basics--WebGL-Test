import React, { useContext, useEffect } from "react";
import StarCard from "../starCard/StarCard";
import AppContext from "../../../context/Context";
import "./cards.css";

function Cards() {
  const { cards, isModalOpen, randomNumber } = useContext(AppContext);
  useEffect(() => {}, [isModalOpen]);
  if (isModalOpen) {
    document.getElementById("cards").classList.add("hidden");
  }
  return (
    <div
      id="cards"
      className={`cards d-flex justify-center f-wrap h-fit w-100 `}
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
