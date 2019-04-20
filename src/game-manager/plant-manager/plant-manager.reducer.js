import { INCREMENT_PROGRESS } from './plant-manager.action-types';
import { makeMapleTree, getCurrentPlantState } from './plant/plant.factory';

const initialState = {
  plants: [makeMapleTree(), makeMapleTree()]
};
/**
 * Returns modified plant.
 * @param {*} plant
 * @param {*} amount
 */
export const progressPlant = (plant, amount) => {
  plant.progress += amount;
  plant.currentState = getCurrentPlantState(plant);

  return plant;
};

export const applyProgressUpdate = (currentPlantsState, { plantId, amount }) => {
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
        plants: applyProgressUpdate([...state.plants], action.payload)
      };
    default:
      return state;
  }
};
