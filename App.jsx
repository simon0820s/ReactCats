import React, { useEffect } from "react";
import { useCat } from "./src/hooks/useCat";
import "./App.css";
const App = () => {
  const [catFact, catImage, fetchCat] = useCat();

  useEffect(() => {
    fetchCat();
  }, []);

  const handleFact = () => {
    fetchCat();
  };

  return (
    <main>
      <div className="text">
        <h1>Random phrase</h1>
        <h2>{catFact || "loading"}</h2>
      </div>
      <div className="content">
        {catImage && <img src={catImage} alt="img from cataas.com" />}
        <button onClick={handleFact}>new Cat</button>
      </div>
    </main>
  );
};

export default App;
