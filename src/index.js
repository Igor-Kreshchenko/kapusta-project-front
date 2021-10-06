import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import storePersistor from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storePersistor.store}>
      {/* <PersistGate loading={null} persistor={storePersistor.persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
