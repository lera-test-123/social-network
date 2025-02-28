import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import './index.css';
import App from "./App";
import store from "./redux/redux-store";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );






