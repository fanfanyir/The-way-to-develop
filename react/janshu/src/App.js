import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { IconStyle } from './statics/iconfont/iconfont.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <IconStyle />
          <Header></Header>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
