import { useState } from "react";
import Home from "./components/Home";
import Cards from "./components/common/cards";
import AppContext from "./context/Context";
import ThreeDModal from "./components/threeDModal";

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contextValues = { cards, isModalOpen, setIsModalOpen };

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
