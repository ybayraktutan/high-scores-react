import './App.css';
import Scores from './Scores'
import HighScoreTable from './HighScoreTable';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>High Score per Country</h1>
      </header>
      <HighScoreTable scores = {Scores} />
    </div>
  );
}

export default App;
