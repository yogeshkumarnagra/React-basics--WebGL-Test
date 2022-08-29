import React, { useContext } from "react";
import StarCard from "./StarCard";
import AppContext from "../../context/Context";

function Cards() {
  const { cards } = useContext(AppContext);
  return (
    <div className="d-flex f-wrap h-fit">
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
