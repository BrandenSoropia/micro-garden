import { createSelector } from 'reselect';
import { selectApp } from 'common/state/selectors';

export const selectPlantManager = createSelector(
  selectApp,
  app => app.plantManager
);

/**
 * Select plant state and only return necessary data.
 */
export const selectPlants = createSelector(
  selectPlantManager,
  plantManager =>
    plantManager.plants.map(({ id, name, progress, type, currentState }) => ({
      name,
      progress,
      type,
      id,
      ...currentState
    }))
);
