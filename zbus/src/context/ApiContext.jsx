import { createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children, baseURL }) => {
  const api = axios.create({ baseURL });

  const createHeader = () => {
    return { header: { Authorization: `Bearer ${""}` } };
  };

  const get = (path) => {
    return api.get(path, createHeader());
  };

  const post = (path, payload) => {
    return api.post(path, payload, createHeader());
  };

  return (
    <ApiContext.Provider value={{ get, post }}>{children}</ApiContext.Provider>
  );
};
