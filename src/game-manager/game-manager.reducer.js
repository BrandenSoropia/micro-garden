import { INITIALIZE_GAME } from "./game-manager.action-types";
import { makeMapleTree } from "./plant/plant.factory";

export const initialState = {
  plants: null
};

/**
 * Initialize game.
 */
const initializeGame = () => {
  return {
    plants: [makeMapleTree(), makeMapleTree()]
  };
};

/**
 * This reducer will act as the plant manager. It will keep a ledger of all platns
 * as well as handle updating a specific plant's state.
 */
export const GameManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_GAME:
      return initializeGame();
    default:
      return state;
  }
};
