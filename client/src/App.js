import React, { Component } from 'react';
import LandingPage from './components/';

import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <LandingPage />
        </div>
      </Provider>
    );
  }
}

export default App;
