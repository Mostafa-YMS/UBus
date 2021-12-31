import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export const useGetStations = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("/api/station");
    return data;
  };
};
