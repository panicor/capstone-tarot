import React, { useState, useEffect } from "react";
import CardImg from "./CardImg";
import "./Deck.css";
import TarotApi from "../api/api";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Deck() {
  //let [cards, setCards] = useState([]);
  let [drawnCard, setDrawnCard] = useState([]);
  let [shuffledCards, setShuffledCards] = useState([]);

  useEffect(function getDeck() {
    async function getData() {
      try {
        const response = await TarotApi.request("/cards/deck");
        if (response.data) {
          const data = response.data;
          shuffleArray(data);
          setShuffledCards(data);
        } 
      } catch (error) {
        // Handle any errors that may occur during the API request
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  // useEffect(() => {
  //   setShuffledCards((prevShuffledCards) => shuffleArray(prevShuffledCards));
  // }, [shuffledCards]);

  async function draw() {
      if (shuffledCards.length > 0) {
        const [drawn, ...remaining] = shuffledCards;
        setDrawnCard(drawn);
        setShuffledCards(remaining);
      }
      else{
        throw new Error("No cards left in deck");
      }

      // setDrawnCard((d) => [
      //   ...d,
      //   {
      //     id: card.id,
      //     name: card.name,
      //     image: card.img,
      //   },
      // ]);
    };

  function drawBtn() {
    if (!shuffledCards) {
      return null;
    }

    return (
        <button
        className="Deck-get"
        onClick={draw}>
            Draw Card
        </button>
    )
  }

  function shuffleBtn(){
    if (!shuffledCards) {
        return null;
      }
  
      return (
         <div>
         <button onClick={() => 
          setShuffledCards(shuffleArray(shuffledCards))}
        >Shuffle</button>
       </div>
      ) 
  }

  return(
    <div className="Deck">
      <div className="Deck-cardarea">{
        drawnCard.map(c => (
          <CardImg key={c.id} name={c.name} image={c.img} />
        ))}
      </div>
      {drawBtn()}
      {shuffleBtn()}
    </div>
  )
}

export default Deck;
