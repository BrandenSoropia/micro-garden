import { combineReducers } from "redux";
import { GameManagerReducer } from "./game-manager/game-manager.reducer";

const rootReducer = combineReducers({
  app: GameManagerReducer
});
export default rootReducer;
