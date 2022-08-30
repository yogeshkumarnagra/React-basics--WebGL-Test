import React, { useContext } from "react";
import AppContext from "../../context/Context";
import "./Home.css";

export default function Home({ children }) {
  const { setIsModalOpen } = useContext(AppContext);
  const modalHandler = (e) => {
    e.stopPropagation();
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
