import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
// 1.import from react-redux and redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

// 4. create redux store
const store = createStore(rootReducer, composeWithDevTools());

// 5.provide redux store to the entire app
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
