import { combineReducers, Reducer } from "redux";
import {
  GameManagerReducer,
  IState
} from "./game-manager/game-manager.reducer";

// TODO: Fix this. Then aggregate classes, interfaces into common folder
const appReducers: Reducer<IState> = combineReducers({
  GameManagerReducer
});

const rootReducer = combineReducers({
  app: appReducers
});

export default rootReducer;
