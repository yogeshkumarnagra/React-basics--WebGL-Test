import React, { useContext } from "react";
import AppContext from "../../context/Context";
import "./Home.css";

export default function Home({ children }) {
  const { setIsModalOpen, isModalOpen } = useContext(AppContext);
  const modalHandler = (e) => {
    e.stopPropagation();
    if (isModalOpen) {
      document.getElementById("cards").classList.remove("hidden");
      let allRotateCards = document.getElementsByClassName("card-inner");
      let i = 0;
      while (i < allRotateCards.length) {
        allRotateCards[i].classList.remove("rotate-card");
        i++;
      }
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`home d-flex p-relative justify-center `}
        onClick={modalHandler}
      >
        {children}
      </div>
    </>
  );
}
