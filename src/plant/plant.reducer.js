import { SET_PLANTS } from "./plant.types";

export const initialState = {
  plants: []
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
