import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      frame: [],
      scores: []
    }
    this.generateScore = this.generateScore.bind(this);
  }

  generateScore(e) {
    console.log(e.target.value);
    const score = e.target.value;
    const scores = [...this.state.scores];
    console.log('scores', scores)
    const prevScore = scores[scores.length - 1] || 0;
    console.log('prevScore', prevScore);
    if (Number(prevScore) + Number(score) <= 10) {
      scores.push(score);
    } else {
      alert('Impossible to score more than 10 in a frame. Choose again')
    }
    this.setState({ scores });
  }

  render() {

    const { scores } = this.state;
    const style = { border: "1px solid black" }

    const buttons = [];
    for (let i = 1; i < 11; i+=3) {
      const row = [];
      for (let j = i; j < i + 3; j++) {
        if (j < 11) {
          row.push(<button value={j} onClick={this.generateScore}>{j}</button>)
        }
      }
      buttons.push(row);
    }

    const frameScores = [];
    for (let i = 0; i < scores.length; i += 2) {
      if (scores[i] && scores[i+1]) {
        frameScores.push(Number(scores[i]) + Number(scores[i+1]));
      }
    }

    const headers = [];
    for (let i = 1; i < 11; i++) {
      headers.push(<th colSpan="2">{i}</th>)
    }

    return (
      <div>
        <div>
          {buttons.map((row) => <div>{row}</div>)}
        </div>
        <table style={style}>
          <thead>
            <tr><td colSpan="10">Scoreboard</td></tr>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>
            <tr>
              {scores.map(score => <td>{score}</td>)}
            </tr>
            <tr>
              {frameScores.map(sum => <td colSpan="2">{sum}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;

