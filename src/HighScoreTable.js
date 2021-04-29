import React, { useState } from "react";
import PlayerScore from "./PlayerScore"
import SortButton from "./SortButton"



function HighScoreTable (props) {
  let sortedCountries = props.scores.sort((country1, country2) =>(
        country1.name.localeCompare(country2.name)
        ))

  const [sortedScores, setSortedScores] = useState(true);

  function sortByClick() {
     setSortedScores(!sortedScores);
     
   }
  
  return (
    <div>
      <h1 className="App-header">High Score per Country</h1>
      <SortButton sort = {sortByClick} />
      {sortedCountries.map((country, index) => (
          <div key ={index}>
            <h3 className="country-name">HIGH SCORE: {country.name}</h3>
            <PlayerScore scores = {country.scores} isAscending = {sortedScores}/>
          </div>
      ))}
    </div>
  );
}


export default HighScoreTable;