import { INITIALIZE_GAME } from "./game-manager.action-types";
import { MapleTree } from "./plant/plant.constants";

export const initialState = {
  plants: []
};

/**
 * Initialize plants.
 */
const setupGame = () => {
  return {
    plants: [new MapleTree()]
  };
};

/**
 * This reducer will act as the plant manager. It will keep a ledger of all platns
 * as well as handle updating a specific plant's state.
 */
export const GameManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_GAME:
      return setupGame();
    default:
      return state;
  }
};
