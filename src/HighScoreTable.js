import React from "react";

function HighScoreTable(props) {
  return (
    <div>
      {props.scores.sort((country1, country2) =>(
        country1.name.localeCompare(country2.name)
        ))
        .map((country, index) => (
          <div>
            <h3 key ={index} className="country-name">HIGH SCORE: {country.name}</h3>
            <table>
                <tr>
                  <th>Player Name</th>
                  <th>Player Score</th>
                </tr>
                {country.scores.sort((player1, player2) => (
                  player2.s - player1.s
                  ))
                .map((score) => (
                  <tr>
                    <td className ="player-name">{score.n.toUpperCase()}</td>
                    <td className ="player-score">{score.s}</td>
                  </tr>
                ))}
            </table>
          </div>
      ))}
    </div>
  );
}


export default HighScoreTable;