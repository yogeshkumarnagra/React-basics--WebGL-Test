import React, { useContext } from "react";
import AppContext from "../context/Context";

export default function Home({ children }) {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);
  return (
    <>
      <div
        className={`home d-flex p-relative ${
          isModalOpen ? "justify-center align-center" : ""
        }`}
        onClick={() => setIsModalOpen(false)}
      >
        {children}
      </div>
    </>
  );
}
