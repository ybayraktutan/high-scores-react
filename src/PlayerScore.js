import React from "react";


function PlayerScore (props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Player Score</th>
                    </tr>
                </thead>
                {props.scores.sort((player1, player2) => (
                  player2.s - player1.s
                  ))
                .map((score, index) => (
                    <tbody>
                        <tr key = {index}>
                            <td className ="player-name">{score.n.toUpperCase()}</td>
                            <td className ="player-score">{score.s}</td>
                        </tr>
                  </tbody>
                ))}
            </table>

        </div>
    )
}


export default PlayerScore;

