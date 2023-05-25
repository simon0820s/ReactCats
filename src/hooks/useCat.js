import { useState, useEffect } from "react";
export const useCat = () => {
  const [catFact, setCatFact] = useState();
  const [catImg, setCatImage] = useState();

  function fetchCat() {
    console.log("fetch");
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setCatFact(fact);
        const splitFirstWords = fact.split(" ", 8).join(" ");

        fetch(`https://cataas.com/cat/says/${splitFirstWords}?json=true`)
          .then((response) => response.json())
          .then(({ url }) => {
            setCatImage("https://cataas.com" + url);
          });
      });
  }
  useEffect(() => {
    fetchCat();
  }, []);

  return [catFact, catImg, fetchCat];
}; // return catFact, catImage, fetchCat
