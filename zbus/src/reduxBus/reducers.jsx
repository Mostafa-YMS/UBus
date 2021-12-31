import { Make_Port } from "./action/constants";

export const makePortReducer = (
  state = {
    latitude: 30.0778,
    longitude: 31.2852,
    zoom: 1,
  },
  action
) => {
  switch (action.type) {
    case Make_Port:
      return action.payload;
    default:
      return state;
  }
};
