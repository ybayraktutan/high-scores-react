import React from "react";
import PlayerScore from "./PlayerScore"

function HighScoreTable (props) {
  return (
    <div>
      {props.scores.sort((country1, country2) =>(
        country1.name.localeCompare(country2.name)
        ))
        .map((country, index) => (
          <div>
            <h3 key ={index} className="country-name">HIGH SCORE: {country.name}</h3>
            <PlayerScore scores = {country.scores}/>
          </div>
      ))}
    </div>
  );
}


export default HighScoreTable;