import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ''
    }
    this.chartRef = React.createRef();
  }

  getData() {
    axios({
      method: 'get',
      url: '/bitcoin'
    })
    .then((response) => {
      const data = {
        labels: Object.keys(response.data.bpi),
        datasets: [{
          label: '$',
          borderColor: 'rgb(255, 99, 132)',
          fill: false,
          data: Object.values(response.data.bpi)
        }]
      }
      this.setState({ data });
    })
    .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, labels } = this.state;
    console.log('data state', this.state.data)
    return (
      <div>
        <Line
          data={data}
        />
      </div>
    )
  }
}

export default App;