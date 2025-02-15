import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import './index.css';
import App from "./App";
import store from "./redux/redux-store";



const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );






