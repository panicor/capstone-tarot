import React, { useState, useEffect } from "react";
import './App.css';
import TarotApi from "../be/api/api";

function App() {
  return (
    <div className="App">
      <Dropdown/>
      <Deck/>
    </div>
  );
}

export default App;
