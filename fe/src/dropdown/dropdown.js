import React, { useState } from 'react';

function Dropdown() {

  const options = [
    '1 card spread',
    '3 card spread',
    '5 card spread'
  ];

  // Create a state variable to track the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Handle changes in the selected option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>Select an Option:</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button>Submit</button>
    </div>
  );
}

export default Dropdown;