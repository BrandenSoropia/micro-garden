import { SET_PLANTS } from "./plant.types";

/**
 * Array containing state of each plant.
 * @param {[object]} plants
 */
export const setPlants = plants => ({
  type: SET_PLANTS,
  payload: {
    plants
  }
});
