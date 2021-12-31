import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export const useLines = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("/linesstops/lines");
    return data;
  };
};

export const useStops = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("/linesstops/getstations");
    return data;
  };
};

export const useCords = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("/linesstops/cords");
    return data;
  };
};
