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

function Deck(numCards) {
  //let [cards, setCards] = useState([]);
  let [drawnCard, setDrawnCard] = useState([]);
  let [shuffledCards, setShuffledCards] = useState([]);

  useEffect(function getDeck() {
    async function getData() {
      try {
        const response = await TarotApi.request("cards");
        if (response) {
          let shuffled = shuffleArray(response);
          console.log(shuffled);
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

  function shuffleAlert() {
    setShuffledCards(shuffleArray(shuffledCards));
    alert("Shuffled!");
    console.log(shuffledCards);
  }

  function shuffleBtn() {
    if (!shuffledCards) {
      return null;
    }

    return (
      <div>
        <button onClick={shuffleAlert}>Shuffle</button>
      </div>
    );
  }
  // shuffledCards.map((c) => {
  //   let tarot_images = require(`../cards_images/${c.img}`);
  //   return tarot_images;
  // })

  return (
    <div className="Deck">
      <div className="Deck-cardarea">
        {/* {drawnCard.map((c) => ( */}
        <div className="img-area">
          <CardImg
            key={drawnCard.id}
            name={drawnCard.name}
            image={drawnCard.img}
          />
          {/* ))} */}
        </div>

        {drawnCard.card_number && (
          <div className="card-info">Card Number: {drawnCard.card_number}</div>
        )}
        {drawnCard.suit && (
          <div className="card-info">Suit: {drawnCard.suit}</div>
        )}
        {drawnCard.arcana && (
          <div className="card-info">Arcana: {drawnCard.arcana}</div>
        )}
        {drawnCard.keywords && (
          <div className="card-info">Keywords: {drawnCard.keywords}</div>
        )}
        {drawnCard.archetype && (
          <div className="card-info">Archetype: {drawnCard.archetype}</div>
        )}
        {drawnCard.hebrew_alphabet && (
          <div className="card-info">Hebrew Alphabet: {drawnCard.suit}</div>
        )}
        {drawnCard.astrology && (
          <div className="card-info">Astrology: {drawnCard.astrology}</div>
        )}
        {drawnCard.affirmation && (
          <div className="card-info">Affirmation: {drawnCard.affirmation}</div>
        )}
        {drawnCard.numerology && (
          <div className="card-info">Numerology: {drawnCard.numerology}</div>
        )}
        {drawnCard.fortune_telling && (
          <div className="card-info">
            Fortune Telling: {drawnCard.fortune_telling}
          </div>
        )}
        {drawnCard.elemental && (
          <div className="card-info">Elemental: {drawnCard.elemental}</div>
        )}
        {drawnCard.meanings_light && (
          <div className="card-info">
            Light Meanings: {drawnCard.meanings_light}
          </div>
        )}
        {drawnCard.meanings_shadow && (
          <div className="card-info">
            Shadow Meanings: {drawnCard.meanings_shadow}
          </div>
        )}
        {drawnCard.mythical_spiritual && (
          <div className="card-info">
            Mythical/Spiritual: {drawnCard.mythical_spiritual}
          </div>
        )}
        {drawnCard.questions_to_ask && (
          <div className="card-info">
            Questions to Ask: {drawnCard.questions_to_ask}
          </div>
        )}
      </div>
      {drawBtn()}
      {shuffleBtn()}
    </div>
  );
}

export default Deck;
