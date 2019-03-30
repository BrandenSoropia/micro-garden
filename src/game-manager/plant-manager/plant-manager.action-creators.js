import { INCREMENT_PROGRESS } from "./plant-manager.action-types";

/**
 * Increment plant with matching plantId by the amount given.
 */
export const incrementProgress = ({ plantId, amount }) => ({
  type: INCREMENT_PROGRESS,
  payload: {
    plantId,
    amount
  }
});
