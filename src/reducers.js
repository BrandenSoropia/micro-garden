import { combineReducers } from 'redux';
import { GameManagerReducer } from './game-manager/game-manager.reducer';
import { plantManagerReducer } from './game-manager/plant-manager/plant-manager.reducer';

const rootReducer = combineReducers({
  game: GameManagerReducer,
  plantManager: plantManagerReducer
});
export default rootReducer;
