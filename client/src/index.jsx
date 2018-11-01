import React from 'react';

import ReactDOM from 'react-dom';

import Reviews from './components/reviews.jsx'

const axios = require('axios');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentHouse: 0,
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const house = Math.floor(Math.random() * 100);
    axios.get(`/rooms/${house}`).then((response) => {
      console.log('response: ', response.data);
      this.setState({
        data: response.data,
        currentHouse: house,
      });
    }).catch((err) => {
      console.log('error: ', err);
    });
  }

  render() {
    return (
      <div>
        <Reviews data={this.state.data} house={this.state.currentHouse}/>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
