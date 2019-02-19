import { createSelector } from "reselect";
import { selectApp } from "common/state/selectors";

export const selectPlants = createSelector(
  selectApp,
  app => app.plants
);
