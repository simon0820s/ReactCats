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
        const splitFirstWords=fact.split(" ",5).join(" ")

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
      <h1>{fact ? fact : "loading"}</h1>
      {img && <img src={img} alt="img from cataas.com"/>}
      <button onClick={handleFact}>Click me</button>
    </main>
  );
};

export default App;
