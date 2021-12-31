import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export const useDriver = () => {
  const apiContext = useContext(ApiContext);

  return async (post) => {
    return await apiContext.post("/mapapi/update/" + post.name + "/", post);
  };
};
