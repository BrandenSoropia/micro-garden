import { inRange } from 'lodash';
import { INCREMENT_PROGRESS } from './plant-manager.action-types';
import { makeMapleTree, getSeedState } from './plant/plant.factory';
import { ABSOLUTE_SEED_STATE_PROGRESS } from './plant/plant.constants';

const initialState = {
  plants: [makeMapleTree(), makeMapleTree()]
};

const getCurrentPlantState = ({ progress, thresholds }) => {
  const matureThreshold = thresholds[thresholds.length - 1];

  if (progress === ABSOLUTE_SEED_STATE_PROGRESS) {
    return getSeedState(thresholds);
  }
  if (progress >= matureThreshold.start) {
    return matureThreshold;
  }

  // Find the highest threshold passed. Don't need to worry about any mature state thresholds' `end` property not being defined due to
  // max threshold check above
  return thresholds.find(({ start, end }) => inRange(progress, start, end));
};

/**
 * Returns modified plant.
 * @param {*} plant
 * @param {*} amount
 */
const progressPlant = (plant, amount) => {
  plant.progress += amount;
  plant.currentState = getCurrentPlantState(plant);

  return plant;
};

const applyProgressUpdate = (currentPlantsState, { plantId, amount }) => {
  let newPlantsState;

  // Treat no plantId as update all.
  if (!plantId) {
    newPlantsState = currentPlantsState.map(plant => progressPlant(plant, amount));
  } else {
    // Find and update plant's progress
    newPlantsState = [...currentPlantsState];
    const plantToUpdateIdx = newPlantsState.findIndex(({ id }) => id === plantId);
    const updatedPlant = progressPlant(newPlantsState[plantToUpdateIdx], amount);
    newPlantsState[plantToUpdateIdx] = updatedPlant;
  }

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
