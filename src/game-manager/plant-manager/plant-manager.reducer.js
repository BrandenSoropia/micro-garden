import { INCREMENT_PROGRESS } from "./plant-manager.action-types";
import { makeMapleTree, getSeedState } from "./plant/plant.factory";
import { ABSOLUTE_SEED_STATE_PROGRESS } from "./plant/plant.constants";
import { inRange } from "lodash";

const initialState = {
  plants: [makeMapleTree()]
};

const getUpdatedPlantState = ({ progress, thresholds }) => {
  const matureThreshold = thresholds[thresholds.length - 1];

  if (progress === ABSOLUTE_SEED_STATE_PROGRESS) {
    return getSeedState(thresholds);
  } else if (progress >= matureThreshold.start) {
    return matureThreshold;
  }

  // Find the highest threshold passed. Don't need to worry about any mature state thresholds' `end` property not being defined due to
  // max threshold check above
  return thresholds.find(({ start, end }) => inRange(progress, start, end));
};

const applyProgressUpdate = (currentPlantsState, { plantId, amount }) => {
  // Find and update plant's progress
  const newPlantsState = [...currentPlantsState];
  const plantToUpdateIdx = newPlantsState.findIndex(({ id }) => id === plantId);
  newPlantsState[plantToUpdateIdx].progress += amount;

  // Update current state if passes a threshold
  newPlantsState[plantToUpdateIdx].currentState = getUpdatedPlantState(
    newPlantsState[plantToUpdateIdx]
  );
  return newPlantsState;
};

export const plantManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PROGRESS:
      return {
        ...state,
        plants: applyProgressUpdate(state.plants, action.payload)
      };
    default:
      return state;
  }
};
