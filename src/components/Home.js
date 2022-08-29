import React, { useContext } from "react";
import AppContext from "../context/Context";

export default function Home({ children }) {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);
  return (
    <>
      <div
        className={`home d-flex p-relative justify-center ${
          isModalOpen ? " align-center" : ""
        }`}
        onClick={() => setIsModalOpen(false)}
      >
        {children}
      </div>
    </>
  );
}
