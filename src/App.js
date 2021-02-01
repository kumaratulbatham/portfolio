import React, { Component } from 'react';
import { ThemeProvider } from "@material-ui/core";

import routes from './routes';
import theme from "../src/theme"; 

const allroutes = routes();

/** useRoutes used after "react-router-dom": "^6.0.0-beta.0" version */
// const newRoutes  = useRoutes(routes());   


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        {allroutes}
      </div>
      </ThemeProvider>
    );
  }
}
export default App;