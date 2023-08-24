import React, { useState } from "react";

function App() {
  const [inputNumbers, setInputNumbers] = useState("");
  const [filteredNumbers, setFilteredNumbers] = useState([]);

  const handleInputChange = (event) => {
    setInputNumbers(event.target.value);
  };

  const ownFilter = (number, callBack) => {
    const filteredNum = [];
    for (const item of number) {
      if (callBack(item)) {
        filteredNum.push(item);
      }
    }
    return filteredNum;
  };

  const evenNum = (number) => number % 2 === 0;

  const filterNumbers = () => {
    const numbersArray = inputNumbers.split(",").map(Number);
    // console.log(numbersArray);
    const evenNumbers = ownFilter(numbersArray, evenNum);
    setFilteredNumbers(evenNumbers);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Number Filter App</h1>
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          value={inputNumbers}
          onChange={handleInputChange}
        />
        <button onClick={filterNumbers}>Filter Even Numbers</button>
        {filteredNumbers.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Even Numbers</th>
              </tr>
            </thead>
            <tbody>
              {filteredNumbers.map((number, index) => (
                <tr key={index}>
                  <td>{number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}

export default App;
