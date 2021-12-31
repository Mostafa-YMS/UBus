import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

export const DarkMode = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  let { user } = useContext(AuthContext);

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      if (user) {
        if (!user.bus_number) {
          document.getElementById("nav").className =
            "navbar navbar-expand-lg navbar-dark bg-dark";
        } else {
          document
            .getElementById("liDiv")
            .classList.add("list-group-item-dark");
        }
      }
    } else {
      document.body.classList.remove("dark");
      if (user) {
        if (!user.bus_number) {
          document.getElementById("nav").className =
            "navbar navbar-expand-lg navbar-light bg-light";
        }
      }
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);
  return (
    <a className={props.class} href="#" onClick={() => setDarkMode(!darkMode)}>
      Dark Mode
    </a>
  );
};
