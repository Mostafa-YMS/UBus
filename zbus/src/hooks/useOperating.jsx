import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export const useOperating = () => {
  const apiContext = useContext(ApiContext);

  return async (name) => {
    return await apiContext.get("/mapapi/operating/" + name + "/");
  };
};
