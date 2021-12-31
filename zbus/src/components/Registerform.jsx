import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

export const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [birth_date, setBirthday] = useState("");

  const navigate = useNavigate();
  const handleMode = () => {
    navigate("/login");
  };
  const handleMode1 = () => {
    navigate("/driverlogin");
  };
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth() +
    1}-${current.getDate()}`;

  async function signup() {
    if (
      email &&
      username &&
      first_name &&
      last_name &&
      password &&
      birth_date
    ) {
      let conf = false;
      let len = false;
      let age = false;
      let em = false;
      const p1 = document.getElementById("pass1").value;
      const p2 = document.getElementById("pass2").value;
      if (validator.isEmail(email)) {
        em = true;
      } else {
        document.getElementById("announce").innerHTML = "Email in not valid";
      }
      if (p1 === p2) {
        conf = true;
      } else {
        document.getElementById("announce").innerHTML =
          "password is not matching confirm password";
      }
      if (p1.length >= 8) {
        len = true;
      } else {
        document.getElementById("announce").innerHTML =
          "password is very short";
      }
      if (birth_date < date) {
        age = true;
      } else {
        document.getElementById("announce").innerHTML = "Wrong birth date";
      }
      if (conf && len && age && em) {
        let item = {
          email,
          username,
          first_name,
          last_name,
          password,
          birth_date,
        };

        let result = await fetch("http://127.0.0.1:8000/user/register", {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        if (result.username[0] === "user with this username already exists.") {
          document.getElementById("announce").innerHTML =
            "Username already exists";
        } else {
          navigate("/login");
        }
      }
    } else {
      document.getElementById("announce").innerHTML = "All fields required";
    }
  }
  return (
    <div className="App">
      <small id="announce" style={{ color: "darkred" }}></small>
      <input
        type="text"
        onChange={(e) => setFname(e.target.value)}
        className="form-control"
        placeholder="first_name"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setLname(e.target.value)}
        className="form-control"
        placeholder="last_name"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
        placeholder="username"
      />
      <br />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
        id="pass1"
      />
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="confirm password"
        id="pass2"
      />
      <br />
      <input
        type="date"
        onChange={(e) => setBirthday(e.target.value)}
        className="form-control"
        placeholder="birth"
      />
      <button
        className="btn btn-primary mt-3 mb-3"
        style={{ width: "100%" }}
        onClick={signup}
      >
        Register
      </button>
      <hr />
      <div className="m-6">
        <p className="d-inline">Already have account ?</p>
        <button
          type="button"
          className="btn btn-link"
          style={{ fontSize: "14pt" }}
          onClick={handleMode}
        >
          Login
        </button>
      </div>
      <div className="m-6">
        <p className="d-inline"> Login as a </p>
        <button
          type="button"
          className="btn btn-link"
          style={{ fontSize: "14pt" }}
          onClick={handleMode1}
        >
          driver ?
        </button>
      </div>
    </div>
  );
};
