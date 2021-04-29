import React from "react";

function WorldWideSores (props) {
    
    let allScores = []
    
    props.scores.map(country => country.scores)
                .forEach(score => 
                    (allScores = allScores.concat(score)))
                    
    let allSortedScores = allScores.sort((player1, player2) => (player2.s - player1.s))

    
    return (
        <div>
            <h1 className="App-header">World Wide High Scores</h1>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Player Score</th>
                    </tr>
                </thead>
                {allSortedScores.map((score, index) => (
                        <tbody key = {index}>
                            <tr>
                                <td className ="player-name">{score.n.toUpperCase()}</td>
                                <td className ="player-score">{score.s}</td>
                            </tr>
                        </tbody>
                ))
                }

            
                    
                
            </table>

        </div>
    )
}


export default WorldWideSores;