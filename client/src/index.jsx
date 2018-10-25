const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>Hello world !!!</div>
      )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));