import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Deck.css";
import axios from "axios";

let URL = "http://localhost:3001/deck";

function Deck() {
  let [deck, setDeck] = useState(null);
  let [drawnCard, setDrawnCard] = useState([]);
  let [shuffling, setShuffling] = useState(false);

  useEffect(function getDeck() {
    async function getData() {
      let data = await axios.get(`${URL}/shuffle`);
      setDeck(data.data);
    }
    getData();
  }, []);

  async function draw() {
    try {
      let drawResp = await axios.get(`${URL}/draw/`);

      if (drawResp.data.remaining === 0) {
        throw new Error("No cards left in deck");
      }

      let card = drawResp.data.cards[0];

      setDrawnCard((d) => [
        ...d,
        {
          id: card.id,
          name: card.name,
          image: card.img,
        },
      ]);
    } catch (e) {
      alert(e);
    }
  }

  async function startShuffle() {
    setShuffling(true);

    try {
      await axios.get(`${URL}/shuffle/`);
      setDrawnCard([]);
    } catch (e) {
      alert(e);
    } finally {
      setShuffling(false);
    }
  }

  function drawBtn() {
    if (!deck) {
      return null;
    }

    return (
        <button
        className="Deck-get"
        onClick={draw}
        disabled={shuffling}>
            Draw Card
        </button>
    )
  }

  function shuffleBtn(){
    if (!deck) {
        return null;
      }
  
      return (
          <button
          className="Deck-get"
          onClick={startShuffle}
          disabled={shuffling}>
              Shuffle
          </button>
      )
  }

  return(
    <div className="Deck">
      <div className="Deck-cardarea">{
        drawnCard.map(c => (
          <Card key={c.id} name={c.name} image={c.img} />
        ))}
      </div>
      {drawBtn()}
      {shuffleBtn()}
    </div>
  )
}

export default Deck;
