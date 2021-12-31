import jwt_decode from "jwt-decode";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DriverContext = createContext();

export default DriverContext;

export const Driverprovider = ({ children }) => {
  let [isready, setready] = useState(() =>
    localStorage.getItem("authTokens") ? true : false
  );
//   let [authTokens, setDriverTokens] = useState(() =>
//     localStorage.getItem("authTokens")
//       ? JSON.parse(localStorage.getItem("authTokens"))
//       : null
//   );
  let [driver, setDriver] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const navigate = useNavigate();
  let loginDriver = async (e) => {
    console.log("fun fire");
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/mapapi/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }), // form is the target
    });

    let data = await response.json().then(setready(true));

    if (response.status === 200) {
      if ((isready = true)) {
        setDriver(jwt_decode(data.jwt));
        console.log("driver", jwt_decode(data.jwt));
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/driverhome");
      }
    } else {
      document.getElementById("announceDriver").innerHTML =
        "Wrong email or password";
    }
  };
  let logOut = async (e) => {
    localStorage.clear();
    driver = null;
    navigate("/driverlogin");
  };
  let contextData = {
    isready: isready,
    driver: driver,
    logOut: logOut,
    loginDriver: loginDriver,
  };
  return (
    <DriverContext.Provider value={contextData}>
      {children}
    </DriverContext.Provider>
  );
};
