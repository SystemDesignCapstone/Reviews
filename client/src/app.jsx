import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios';

import Reviews from './components/reviews.jsx';

import Stars from './components/stars.jsx';

import Overview from './components/overview.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{
        accuracy: 5,
        avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg",
        'check-in': 5,
        cleanliness: 1,
        communication: 5,
        house_id: 49,
        id: 9,
        location: 2,
        name: "Dominique Casper",
        review_body: "Molestias earum dignissimos asperiores soluta ratione fugit. Amet sit odit et aliquam rerum vero hic. Dicta sequi dolor facere suscipit quo repellat in omnis.",
        review_report: null,
        review_time: "2018-04-11 05:14:05",
        reviewer_id: 9,
        value: 3
      }, {
        accuracy: 3,
        avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg",
        'check-in': 5,
        cleanliness: 1,
        communication: 5,
        house_id: 49,
        id: 9,
        location: 2,
        name: "Dominique Casper",
        review_body: "Molestias earum dignissimos asperiores soluta ratione fugit. Amet sit odit et aliquam rerum vero hic. Dicta sequi dolor facere suscipit quo repellat in omnis.",
        review_report: null,
        review_time: "2018-04-11 05:14:05",
        reviewer_id: 9,
        value: 1
      }, {
        accuracy: 5,
        avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg",
        'check-in': 5,
        cleanliness: 1,
        communication: 5,
        house_id: 49,
        id: 9,
        location: 2,
        name: "Dominique Casper",
        review_body: "Molestias earum dignissimos asperiores soluta ratione fugit. Amet sit odit et aliquam rerum vero hic. Dicta sequi dolor facere suscipit quo repellat in omnis.",
        review_report: null,
        review_time: "2018-04-11 05:14:05",
        reviewer_id: 9,
        value: 1
      }],
      currentHouse: 49,
      isLoading: true,
    };
  }

  // componentWillMount() {
  //   const house = Math.floor(Math.random() * 100);
  //   axios.get(`/api/${house}`).then((response) => {
  //     this.setState({
  //       data: response.data,
  //       currentHouse: house,
  //       isLoading: true,
  //     });
  //   }).catch((err) => {
  //     console.log('error: ', err);
  //   });
  // }

  render() {
    return (
      <div id="section_container">
        {this.state.isLoading &&
          <Stars star={this.state.data}/>
        }
        {this.state.isLoading &&
          <Reviews data={this.state.data} house={this.state.currentHouse}/>
        }
      </div>);
  }
}

export default App;
