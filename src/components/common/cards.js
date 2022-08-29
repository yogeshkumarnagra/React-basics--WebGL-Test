import React, { useContext } from "react";
import StarCard from "./StarCard";
import AppContext from "../../context/Context";

function Cards() {
  const { cards, isModalOpen } = useContext(AppContext);
  return (
    <div
      className={`cards d-flex justify-center f-wrap h-fit w-100 ${
        isModalOpen ? "hidden" : ""
      }`}
    >
      {cards.length > 0 &&
        cards.map((card, i) => {
          return (
            <>
              <StarCard key={i} />
            </>
          );
        })}
    </div>
  );
}

export default Cards;
