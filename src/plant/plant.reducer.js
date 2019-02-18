import { SET_PLANTS } from "./plant.types";
import { plantRegistry, TREE, MAPLE_TREE } from "./plant.constants";

export const initialState = {
  plants: [plantRegistry[TREE][MAPLE_TREE]]
};

/**
 * This reducer will act as the plant manager. It will keep a ledger of all platns
 * as well as handle updating a specific plant's state.
 */
export const PlantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANTS:
      return {
        ...state,
        plants: action.plants
      };
    default:
      return state;
  }
};
