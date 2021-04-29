import React from "react";


function PlayerScore (props) {
    let sortedScores;

    if (props.isAscending) {
        sortedScores = props.scores.sort((player1, player2) => (player1.s - player2.s))
    } else {
        sortedScores = props.scores.sort((player1, player2) => (player2.s - player1.s))
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Player Score</th>
                    </tr>
                </thead>
                {sortedScores.map((score, index) => (
                    <tbody key = {index}>
                        <tr>
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

