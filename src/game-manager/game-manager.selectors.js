import { createSelector } from "reselect";

export const selectApp = store => store.app;

export const selectPlants = createSelector(
  selectApp,
  app => app.plants
);
