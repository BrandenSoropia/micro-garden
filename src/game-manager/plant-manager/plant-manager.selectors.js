import { createSelector } from 'reselect';
import { selectApp } from 'common/state/selectors';

export const selectPlantManager = createSelector(
  selectApp,
  app => app.plantManager
);

export const selectPlants = createSelector(
  selectPlantManager,
  plantManager => plantManager.plants
);
