import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


import App from './components/App';
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store, applyMiddleware(thunk)} >
  <App />
  </Provider>,
   document.getElementById('root')
);
