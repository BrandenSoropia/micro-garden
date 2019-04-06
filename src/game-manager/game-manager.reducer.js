import { INITIALIZE_GAME } from './game-manager.action-types';

export const initialState = {
  isReady: false
};

/**
 * Temp Initialize game.
 */
const initializeGame = () => {
  return {
    isReady: true
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
