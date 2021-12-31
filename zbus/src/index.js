import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApiContextProvider } from "./context/ApiContext";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./reduxBus/BusStore";
import { Driverprovider } from "./context/DriverContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ApiContextProvider baseURL="http://127.0.0.1:8000/">
        <Provider store={store}>
          <Driverprovider>
            <App />
          </Driverprovider>
        </Provider>
      </ApiContextProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
