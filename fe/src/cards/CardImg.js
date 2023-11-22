import React from "react";
import "./CardImg.css";

function CardImg({
  name,
  image,
  showCard=false,
}) {

  if(image && name){
    showCard = true;
  }
  
  if (!showCard) {
    return null; // Don't render anything if showCard is false
  }

  let flip = Math.floor(Math.random() * 2);
  let flipStyle = flip ? { transform: "rotate(180deg)" } : {};
  return (
    <div className="Card">
      <img className="Card-img" alt={name} src={image} style={flipStyle} />
      {flip ? <p>You drew {name} in reverse</p> : <p>You drew {name}</p>}
    </div>
  );
}

export default CardImg;
