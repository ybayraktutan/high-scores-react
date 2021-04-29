import './App.css';
import Scores from './Scores'
import HighScoreTable from './HighScoreTable';
import WorldWideSores from './WorldWideScores';




function App() {
  return (
    <div className="App">
      <WorldWideSores scores = {Scores} />
      <HighScoreTable scores = {Scores} />
    </div>
  );
}

export default App;
