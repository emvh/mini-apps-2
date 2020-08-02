import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scores: []
    }
    this.generateScore = this.generateScore.bind(this);
    this.getFinalScore = this.getFinalScore.bind(this);
  }

  generateScore(e) {
    const score = e.target.value;
    const scores = [...this.state.scores];
    console.log('scores', scores)
    const prevScore = scores[scores.length - 1] || 0;

    if (scores.length < 20 && scores[18] !== '10') {
      if (scores.length % 2 === 1) {
        if (Number(prevScore) + Number(score) <= 10) {
          scores.push(score);
        } else {
          alert('Impossible to score more than 10 in a frame. Choose again')
        }
      } else if (scores.length % 2 === 0) {
        if (Number(score) === 10) {
          scores.push(score, '0')
        } else {
          scores.push(score);
        }
      }
    }

    // 10th frame
    if (scores.length < 22 && scores[18] === '10' || Number(scores[18]) + Number(scores[19]) === 10) {
      if (Number(scores[18]) + Number(scores[19]) === 10 && scores[18] !== '10') {
        scores.push(score);
        if (scores[20]) {
          alert('game over');
        }
      } else {
        if (Number(score) === 10) {
          scores.push(score);
        } else if (scores.length % 2 === 0) {
          if (Number(prevScore) + Number(score) <= 10) {
            scores.push(score);
          } else {
            alert('Impossible to score more than 10 in a frame. Choose again')
          }
        } else {
          scores.push(score);
        }
      }
    }

    if (scores.length > 22) {
      alert('game over');
    }
    this.setState({ scores });
  }

  getFinalScore() {
    const scores = [...this.state.scores];
    return scores.reduce((a,b) => Number(a) + Number(b), 0);
  }

  render() {

    const { scores } = this.state;
    const style = { border: "1px solid black" }

    const buttons = [];
    for (let i = 0; i < 11; i+=3) {
      const row = [];
      for (let j = i; j < i + 3; j++) {
        if (j < 11) {
          row.push(<button value={j} onClick={this.generateScore}>{j}</button>)
        }
      }
      buttons.push(row);
    }

    const frameScores = [];
    for (let i = 0; i < 18; i += 2) {
      if (scores[i] && scores[i+1]) {
        frameScores.push(Number(scores[i]) + Number(scores[i+1]));
        console.log('framescores', frameScores)
      }
    }

    const headers = [];
    for (let i = 1; i < 10; i++) {
      headers.push(<th colSpan="2">{i}</th>)
    }

    return (
      <div>
        <div>
          {buttons.map((row) => <div>{row}</div>)}
        </div>
        <table style={style}>
          <thead>
            <tr><td colSpan="25">Scoreboard</td></tr>
            <tr>
              {headers}
              <th colSpan="4">10</th>
              <td>Total Score</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {scores.map(score => <td>{score}</td>)}
            </tr>
            <tr>
              {frameScores.map(sum => <td colSpan="2">{sum}</td>)}
              <td colSpan="4">{frameScores.slice(18)}</td>
              <td>{scores.length > 20 && this.getFinalScore()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;

