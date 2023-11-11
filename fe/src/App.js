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
  let numCards;

  // Create a state variable to track the selected option
  const [selectedOption, setSelectedOption] = useState(1);

  // Handle changes in the selected option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    numCards = e.target.value;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Select an Option:</h3>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value={1}>1 card spread</option>
          <option value={3}>3 card spread</option>
          <option value={5}>5 card spread</option>
          {/* {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))} */}
        </select>
        <button type="submit">Submit</button>
      </form>
      <Deck numCards={numCards} />
    </div>
  );
}

export default App;
