import React, { useEffect, useState } from "react";
import './App.css'
const App = () => {
  const [fact, setFact] = useState();
  const [img, setImage] = useState();

  function fetchCat (){
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        const {fact}=data
        setFact(fact);
        const splitFirstWords=fact.split(" ",8).join(" ")

        fetch(`https://cataas.com/cat/says/${splitFirstWords}?json=true`)
        .then(response => response.json())
        .then(({url}) => {
          setImage("https://cataas.com"+url)
        });
      });
  }

  useEffect(() => {
      fetchCat()
  },[]);
  
  const handleFact=()=>{
    fetchCat()
  }


  return (
    <main>
      <div className="text">
        <h1>Random phrase</h1>
        <h2>{fact ? fact : "loading"}</h2>
      </div>
      <div className="content">
      {img && <img src={img} alt="img from cataas.com"/>}
      <button onClick={handleFact}>new Cat</button>
      </div>
    </main>
  );
};

export default App;
