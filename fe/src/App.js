import React, { useState } from "react";
import "./App.css";
//import Dropdown from "./dropdown/Dropdown"
import Deck from "./cards/Deck";

function App() {
  // return (
  //   <div className="App">
  //     <Dropdown/>
  //     <Deck />
  //   </div>
  // );
  // let numCards;

  // // Create a state variable to track the selected option
  // const [selectedOption, setSelectedOption] = useState(1);

  // // Handle changes in the selected option
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  // const handleSubmit = (e) => {
  //   numCards = e.target.value;
  // };

  return (
    <div>
      <Deck/>
    </div>
  );
}

export default App;
