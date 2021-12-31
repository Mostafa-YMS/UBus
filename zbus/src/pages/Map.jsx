import { MainMap } from "../components/MainMap";
import img from "../img/map2.png";

export const Map = (props) => {
  props.setBackGround(img)

  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col-12" style={{ width: "100vh", height: "93vh" }}>
            <MainMap auto={true} />
          </div>
        </div>
      </div>
    </>
  );
};
