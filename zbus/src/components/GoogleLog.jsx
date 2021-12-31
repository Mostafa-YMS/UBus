import { useState } from "react";
import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function GooGle() {
  const clientId =
    "<606377052296-ng49hn7th9j8e7atqkb2huo0qqds6tn6.apps.googleusercontent.com>";
  const [loading, setLoading] = useState("Loading...");
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    console.log("Login Success ", response);
    setUser(response.profileObj);
    setLoading();
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failure ", error);
    setLoading();
  };

  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  };

  const handleLogoutFailure = (error) => {
    console.log("Logout Failure ", error);
  };

  const handleRequest = () => {
    setLoading("Loading...");
  };

  const handleAutoLoadFinished = () => {
    setLoading();
  };

  return (
    <>
      <br />
      <div style={{ margin: "15px" }}>
        {user ? (
          <div>
            <div className="name">Welcome {user.name}!</div>
            <GoogleLogout
              clientId={clientId}
              onLogoutSuccess={handleLogoutSuccess}
              onFailure={handleLogoutFailure}
              style={{ width: "94%", margin: "16px" }}
            />
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText={loading}
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            onRequest={handleRequest}
            onAutoLoadFinished={handleAutoLoadFinished}
            isSignedIn={true}
          />
        )}
      </div>
    </>
  );
}

export default GooGle;
