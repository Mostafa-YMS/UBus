import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export const useGetDriver = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("mapapi/get/");
    return data;
  };
};
