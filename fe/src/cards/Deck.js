import React, { useState, useEffect } from "react";
import CardImg from "./CardImg";
import "./Deck.css";
import TarotApi from "../api/api";
//let tarot_images = require(`../cards_images/${drawnCard.img}`);


// for(let tarot_image in tarot_images){
//  let url = tarot_image.img;
// }

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
        const response = await TarotApi.request("cards");
        if (response) {
          let shuffled = shuffleArray(response);
          console.log(shuffled)
          setShuffledCards(shuffled);
        } else {
          console.error("No data received from the API");
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
    } else {
      throw new Error("No cards left in deck");
    }



    // setDrawnCard((d) => [
    //   ...d,
    //   {
    //     id: drawn.id,
    //     name: drawn.name,
    //     image: drawn.img,
    //   },
    // ]);
  }

  function drawBtn() {
    if (!shuffledCards) {
      return null;
    }

    return (
      <button className="Deck-get" onClick={draw}>
        Draw Card
      </button>
    );
  }

  function shuffleAlert(){
    setShuffledCards(shuffleArray(shuffledCards));
    alert("Shuffled!")
    console.log(shuffledCards);
  }

  function shuffleBtn() {
    if (!shuffledCards) {
      return null;
    }

    return (
      <div>
        <button onClick={shuffleAlert}>
          Shuffle
        </button>
      </div>
    );
  }


  console.log(drawnCard.img);
  // shuffledCards.map((c) => {
  //   let tarot_images = require(`../cards_images/${c.img}`);
  //   return tarot_images;
  // })
 console.log(`../cards_images/${drawnCard.img}`);
  return (
    <div className="Deck">
      <div className="Deck-cardarea">
        {/* {drawnCard.map((c) => ( */}
          <CardImg key={drawnCard.id} name={drawnCard.name} src="https://imgur.com/a/7SIwoVT"/>
          {/* <img src={tarot_images} alt="card"/> */}
        {/* ))} */}
        
      </div>
      {drawBtn()}
      {shuffleBtn()}
    </div>
  );
}

export default Deck;
