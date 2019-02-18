import { combineReducers } from "redux";
import { PlantReducer } from "./plant/plant.reducer";

export const rootReducer = combineReducers({
  plants: PlantReducer
});
