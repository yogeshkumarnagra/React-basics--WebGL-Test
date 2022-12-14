import { useState } from "react";
import Home from "./components/Home/Home";
import Cards from "./components/common/card/cards";
import AppContext from "./context/Context";
import ThreeDModal from "./components/ThreeDModal/threeDModal";

function App() {
  const cards = Array(5).fill({ value: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const randomNumber = parseInt(Math.random() * 5);

  const contextValues = { cards, isModalOpen, setIsModalOpen, randomNumber };

  return (
    <AppContext.Provider value={contextValues}>
      <div className="app p-relative d-flex justify-center align-center w-100 h-100">
        <Home>
          <Cards />
          <ThreeDModal />
        </Home>
      </div>
    </AppContext.Provider>
  );
}

export default App;
