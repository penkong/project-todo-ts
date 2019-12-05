// style
import "./index.css";
import { createGlobalStyle } from "styled-components";
//
import React from "react";
import ReactDOM from "react-dom";
// store and persist store.
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux";
// comps utils
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
//

const GlobalStyle = createGlobalStyle`
  body {
    background : rgb(255,254,252);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    height: auto;
    min-width: 100vw;
    max-width: 100vw;
    width: 100vw;
    outline: none;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// ----------------------------------------------------------------------
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
