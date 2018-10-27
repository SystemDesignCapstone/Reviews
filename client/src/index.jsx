const axios = require('axios');
import Reviews from './components/reviews.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    var house = Math.floor(Math.random() * 100);
    axios.get(`/rooms/${house}`)
    .then((response)=> {
      console.log('response: ', response.data);
      this.setState({
        data: response.data
      });
    })
    .catch((err)=> {
      console.log('error: ', err);
    })
  }

  render() {
    return(
      <div>
      <Reviews data={this.state.data}/>
      </div>
      )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));