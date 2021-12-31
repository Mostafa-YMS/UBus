import { Make_Port } from "./constants";

export function makePort(newPort) {
  return {
    type: Make_Port,
    payload: newPort,
  };
}
