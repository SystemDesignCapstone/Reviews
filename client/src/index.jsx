const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/rooms/1')
    .then((response)=> {
      console.log('response: ', response.data);
    })
    .catch((err)=> {
      console.log('error: ', err);
    })
  }

  render() {
    return(
      <div>Hello world !!!</div>
      )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));