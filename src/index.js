import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import store, { history } from './app.store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

/*
  Requirements
  // it should add todo
// it should see all todos
// it should complete todo
// it should delete todo
// it should see for each todo if completed/not
*/
