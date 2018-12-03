import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Set up state
    this.state = {
      scores: [
        {
          id: 1,
          name: `ahjuma`,
          score: 1001
        },
        {
          id: 2,
          name: `jeffles`,
          score: 20
        },
        {
          id: 3,
          name: `stinkface`,
          score: 500
        }

      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Scoreboard App</h1> 
        {/* This is a comment */}
        <div className="score-container">
          {this._scoresAsCards()}
        </div>
      </div>
    );
  }

  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <div key={score.id}>
          <h2>Name: {score.name} // Score: {score.score}</h2>
          <button onClick={() => this._incrementScoreById(score.id)}>+</button>
        </div>
      );
    });
    return cards;
  }
  
  _incrementScoreById(id) {
    // find the player in this.state.scores
    // increment their score
    // and call this.setState
  
    console.log(`test`);
  
  }
}


export default App;
