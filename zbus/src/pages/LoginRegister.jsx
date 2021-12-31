import img from "../img/logger.png";
import GooGle from "../components/GoogleLog";
import FaceLog from "../components/faceLog";
import "../styles/home.css";

export const LoginRegister = (props) => {
  props.setBackGround(img)
  
  return (
    <div className="logger">
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-6 justify-content-center align-self-center">
            <div style={{ marginTop: "60px" }}>{props.mode}</div>
          </div>
          <div className="col-6 justify-content-center align-self-center"></div>
        </div>
      </div>
    </div>
  );
};
