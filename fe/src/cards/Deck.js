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
  //let [prevCard, setPrevCard] = useState([]);
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
  }

  function drawBtn() {
    if (!shuffledCards) {
      return null;
    }

    return (
      <button className="Deck-btn" onClick={draw}>
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
        <button className="Deck-btn" onClick={shuffleAlert}>
          Shuffle Deck
        </button>
      </div>
    );
  }

  //let iterations = Array.from({ length: numCards }, (_, index) => index);

  return (
    <div className="Deck">
      <h1 className="header">Welcome to TarotTeacher!</h1>
      <div className="Deck-card-area">
        {drawnCard && (
          <div className="Deck-img-area">
            <CardImg
              key={drawnCard.id}
              name={drawnCard.name}
              image={drawnCard.img}
            />
          </div>
        )}
        <div className="Deck-card-info-area">
          {drawnCard.card_number && (
            <div className="card-info">
              <p className="label">Card Number:</p> {drawnCard.card_number}
            </div>
          )}
          {drawnCard.suit && (
            <div className="card-info">
              <p className="label">Suit:</p> {drawnCard.suit}
            </div>
          )}
          {drawnCard.arcana && (
            <div className="card-info">
              <p className="label">Arcana:</p> {drawnCard.arcana}
            </div>
          )}
          {drawnCard.keywords && (
            <div className="card-info">
              <p className="label">Keywords:</p> {drawnCard.keywords}
            </div>
          )}
          {drawnCard.archetype && (
            <div className="card-info">
              <p className="label">Archetype:</p> {drawnCard.archetype}
            </div>
          )}
          {drawnCard.hebrew_alphabet && (
            <div className="card-info">
              <p className="label">Hebrew Alphabet:</p> {drawnCard.suit}
            </div>
          )}
          {drawnCard.astrology && (
            <div className="card-info">
              <p className="label">Astrology:</p> {drawnCard.astrology}
            </div>
          )}
          {drawnCard.affirmation && (
            <div className="card-info">
              <p className="label">Affirmation:</p> {drawnCard.affirmation}
            </div>
          )}
          {drawnCard.numerology && (
            <div className="card-info">
              <p className="label">Numerology:</p> {drawnCard.numerology}
            </div>
          )}
          {drawnCard.fortune_telling && (
            <div className="card-info">
              <p className="label">Fortune Telling:</p>{" "}
              {drawnCard.fortune_telling}
            </div>
          )}
          {drawnCard.elemental && (
            <div className="card-info">
              <p className="label">Elemental:</p> {drawnCard.elemental}
            </div>
          )}
          {drawnCard.meanings_light && (
            <div className="card-info">
              <p className="label">Light Meanings:</p>
              {drawnCard.meanings_light}
            </div>
          )}
          {drawnCard.meanings_shadow && (
            <div className="card-info">
              <p className="label">Shadow Meanings:</p>{" "}
              {drawnCard.meanings_shadow}
            </div>
          )}
          {drawnCard.mythical_spiritual && (
            <div className="card-info">
              <p className="label">Mythical/Spiritual:</p>{" "}
              {drawnCard.mythical_spiritual}
            </div>
          )}
          {drawnCard.questions_to_ask && (
            <div className="card-info">
              <p className="label">Questions to Ask:</p>{" "}
              {drawnCard.questions_to_ask}
            </div>
          )}
        </div>
      </div>
      <div className="btns">{drawBtn()}</div>
      <div className="btns">{shuffleBtn()}</div>
    </div>
  );
}

export default Deck;
