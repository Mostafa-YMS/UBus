import { Route, Routes } from "react-router-dom";
import { Loginform, RegisterForm, Navbar } from "./components";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import {
  Map,
  LinesStations,
  LoginRegister,
  DriverLogin,
  DriverHome,
  Chat,
} from "./pages";
import LoginRoute from "./utils/LoginRoute";
import { DriverLoginRoute } from "./utils/DriverRoute";
import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";

import "./styles/App.css";

function App() {
  let { user } = useContext(AuthContext);

  const setBackGround = (img) => {
      document.body.style.backgroundImage = `url(${img})`;
      document.body.style.backgroundRepeat = `no-repeat`;
      document.body.style.backgroundSize = `cover`;
  };

  return (
    <>
      {user && !user.bus_number ? <Navbar /> : ""}
      <Routes>
        <Route
          path="/login"
          element={
            <LoginRoute
              child={
                <LoginRegister
                  setBackGround={setBackGround}
                  mode={<Loginform />}
                />
              }
            />
          }
        />
        <Route
          path="/register"
          element={
            <LoginRoute
              child={
                <LoginRegister
                  setBackGround={setBackGround}
                  mode={<RegisterForm />}
                />
              }
            />
          }
        />
        <Route exact path="/" element={<LoginRoute child={<Home setBackGround={setBackGround}/>} />} />
        <Route
          exact
          path="/home"
          element={
            <PrivateRoute child={<Map setBackGround={setBackGround} />} />
          }
        />
        <Route
          path="/lines"
          element={
            <PrivateRoute
              child={<LinesStations setBackGround={setBackGround} />}
            />
          }
        />
        <Route
          path="/driverlogin"
          element={
            <LoginRegister
              setBackGround={setBackGround}
              mode={<DriverLogin />}
            />
          }
        />
        <Route
          exact
          path="/driverhome"
          element={
            <DriverLoginRoute
              child={<DriverHome setBackGround={setBackGround} />}
            />
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute child={<Chat setBackGround={setBackGround} />} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
