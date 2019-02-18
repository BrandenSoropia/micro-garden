import { combineReducers } from "redux";
import { PlantReducer } from "./plant/plant.reducer";

const rootReducer = combineReducers({
  plants: PlantReducer
});

export default rootReducer;
