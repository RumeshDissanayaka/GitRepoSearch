import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import App from './App';
import Routes from "./routes";
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const RootApp =
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App>
          <Routes />
        </App>
      </Router>
    </PersistGate>
  </Provider>

ReactDOM.render(RootApp, document.getElementById('root'));
serviceWorker.unregister();
