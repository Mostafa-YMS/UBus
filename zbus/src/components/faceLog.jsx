import React from "react";
import FacebookLogin from "react-facebook-login";

class FaceLog extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="320632229911057"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={console.log(this.responseFacebook)}
        size="small"
        buttonStyle={{ marginTop: "40px" }}
      />
    );
  }
}

export default FaceLog;
