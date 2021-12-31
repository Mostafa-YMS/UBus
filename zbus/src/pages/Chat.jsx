import ChatBot from "react-simple-chatbot";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import img from "../img/map2.png";
export const Chat = (props) => {
  props.setBackGround(img)

  let { user } = useContext(AuthContext);
  const username = user.username;
  return (
    <div style={{ paddingLeft: "500px", paddingTop: "60px" }}>
      <ChatBot
        steps={[
          {
            id: "1",
            message: "hi " + username + " What number I am thinkingz?",
            trigger: "2",
          },
          {
            id: "2",
            options: [
              { value: 1, label: "About Us", trigger: "3" },
              { value: 2, label: "Contact Us", trigger: "4" },
              { value: 3, label: "Have A Problem", trigger: "5" },
            ],
          },
          {
            id: "3",
            message:
              "UBUS is a structure where city or intercity buses stop to pick up and drop off passengers. ... Bus station platforms may be assigned to fixed bus lines, or variable in combination with a dynamic passenger information system",
            trigger: "2",
          },
          {
            id: "4",
            message: "you can Contact  us via 190900",
            trigger: "2",
          },
          {
            id: "5",
            message: "how can i help you?",
            trigger: "6",
          },
          {
            id: "6",
            user: true,
            trigger: "7",
          },
          {
            id: "7",
            message:
              'to get your solution please visit our customers service "www.ubusservice.com"',
            trigger: "8",
          },
          {
            id: "8",
            message: "Thank you",
            end: true,
          },
        ]}
      />
    </div>
  );
};
