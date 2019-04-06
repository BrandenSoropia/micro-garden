import { createSelector } from 'reselect';
import { selectApp } from 'common/state/selectors';

export const selectPlantManager = createSelector(
  selectApp,
  app => app.plantsManager
);

export const selectPlants = createSelector(
  selectPlantManager,
  plantManager => plantManager.plants
);
