import React, { Component } from 'react';

import routes from './routes'; 

const allroutes = routes();


class App extends Component {
  render() {
    return (
      <div className="App">
        {allroutes}
      </div>
    );
  }
}
export default App;