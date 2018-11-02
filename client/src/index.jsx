import React from 'react';

import ReactDOM from 'react-dom';

import Reviews from './components/reviews.jsx';

import Stars from './components/stars.jsx';

import Overview from './components/overview.jsx';

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
        <Stars star={this.state.data}/>
        <Reviews data={this.state.data} house={this.state.currentHouse}/>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
