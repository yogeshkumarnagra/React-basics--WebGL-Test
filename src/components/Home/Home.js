import React, { useContext, useEffect } from "react";
import AppContext from "../../context/Context";
import "./Home.css";

export default function Home({ children }) {
  const { setIsModalOpen, isModelOpen } = useContext(AppContext);
  const modalHandler = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
    window.reload();
  };
  useEffect(() => {}, [isModelOpen]);

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
