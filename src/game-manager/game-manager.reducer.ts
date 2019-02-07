import { Plant as PlantClass } from "../plant/plant.classes";
import { INITIALIZE } from "./game-manager.types";
import { get } from "lodash";

export interface IState {
  plants: Array<PlantClass>;
}

interface IAction {
  type: string;
  payload?: Object;
}

const initialState: IState = {
  plants: []
};
export const GameManagerReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        ...get(action, "payload")
      };
    default:
      return state;
  }
};
