import React from "react";
import Card from "./Components/Card";
import allCountryScores from "./scores";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> High Score by Country</h1>
      {allCountryScores.map((country, index) => (
        <Card key={index} country={country.name} />
      ))}
    </div>
  );
}

export default App;
