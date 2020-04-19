import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from 'containers/root';
import rootReducer from 'reducers';

import './styles/main.scss';

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: fb.FacebookStatic;
    jQuery: JQueryStatic;
    $: JQueryStatic;
  }
}

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.querySelector('#root')
);
