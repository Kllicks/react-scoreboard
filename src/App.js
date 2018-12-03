import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ScoreCard from './ScoreCard';

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
        <ScoreCard
          key = {score.id}
          id = {score.id}
          name = {score.name}
          score = {score.score}
          upClick = {this._incrementScoreById.bind(this)}
          downClick = {this._decrementScoreById.bind(this)}
          // upClick = {(e) => this._incrementScoreById(e)}
          // downClick = {(e) => this._decrementScoreById(e)}
        />
      );
    });
    return cards;
  }
  
  // Version 1: .map, manually constructing replacement
  // _incrementScoreById(id) {
  //   // find the player in this.state.scores
  //   // increment their score
  //   const newScores = this.state.scores.map(scoreObj => {
  //     if (scoreObj.id !== id) {
  //       return scoreObj;
  //     } else {
  //       return {
  //         id: scoreObj.id,
  //         name: scoreObj.name,
  //         score: scoreObj.score + 1
  //       }
  //     }
  //   });
    
  //   // and call this.setState
  //   this.setState({
  //     scores: newScores
  //   });
  // }

  // Version 2: .map, using a shorthand to copy values out of the original
// _incrementScoreById(id) {
//   // find the player in this.state.scores
//   //increment their score
//   const newScores = this.state.scores.map(scoreObj => {
//     if(scoreObj.id !== id) {
//       return scoreObj;
//     } else {
//       return {
//         ...scoreObj,
//         score: scoreObj.score + 1
//       }
//     }
//   });
//   // and call this.setState
//   this.setState({
//     scores: newScores
//   });
// }

// Version 3: .map, object copy + ternary + implicit return
// using a shorthand copy values out of the original score
_incrementScoreById(id) {
  //find the player in this.state.scores
  // increment their score
  const newScores = this.state.scores.map(scoreObj => {
    return scoreObj.id !== id ? scoreObj: {...scoreObj, score: scoreObj.score + 1}
  });
  // and call this.setState
  this.setState({
    scores: newScores
  });

}

_decrementScoreById(id) {
  //find the player in this.state.scores
  // decrement their score
  const newScores = this.state.scores.map(scoreObj => {
    return scoreObj.id !== id ? scoreObj: {...scoreObj, score: scoreObj.score - 1}
  });
  // and call this.setState
  this.setState({
    scores: newScores
  });
}

}

export default App;
