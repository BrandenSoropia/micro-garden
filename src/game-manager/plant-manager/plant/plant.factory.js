/**
 * Source of truth for all plants available in game. All plant game data should come from this
 * file.
 */
import { inRange } from "lodash";
// Sprites
import SpriteSeed from "./assets/seed.png";
import SpriteMapleSprout from "./assets/maple-sprout.png";
import SpriteMapleSapling from "./assets/maple-sapling.png";
import SpriteMapleMature from "./assets/maple-mature.png";
import {
  STATUS,
  TREE,
  MAPLE_TREE,
  ABSOLUTE_SEED_STATE_PROGRESS
} from "./plant.constants";
import { uniqueId } from "lodash";

// In case thresholds array are not in particular order...
export const getSeedState = thresholds =>
  thresholds.find(({ status }) => status === STATUS.SEED);

export const makePlant = plantProperties => {
  const { name, thresholds, type } = plantProperties;
  return {
    id: uniqueId("plant-"), // Used to help find specific plants instances
    name: name,
    thresholds: thresholds,
    type: type,
    // Everything starts at 0 and in seed state
    progress: 0,
    currentState: getSeedState(thresholds)
  };
};

// TODO: Change below 2 functions to update redux state
/**
 * Given a +/- number, add to current progress and update current plant state.
 * @param {*} amount: positive or negative number to be applied to current progress
 */
function updateProgress(amount) {
  this.setProgress(this.getProgress() + amount);
  this.setCurrentState(this.findCurrentState());
}

function findCurrentState() {}

/**
 * Properties:
 * name: Text to be displayed
 * thresholds: array of object describing each of plant's development state. Ranges use start (inclusive) and end (exclusive). Ideally in order of increasing maturity. State should look like below
 *   start: number
 *   end: number
 *   state: string,
 *   sprite: path to image. Imported from asset's index file
 *
 */
export const makeMapleTree = () => {
  return makePlant({
    type: TREE,
    name: MAPLE_TREE,
    // Ideally in order of increasing maturity for sanity's sake
    thresholds: [
      {
        start: ABSOLUTE_SEED_STATE_PROGRESS,
        end: 1,
        status: STATUS.SEED,
        sprite: SpriteSeed,
        alt: "A brown, oval shaped seed."
      },
      {
        start: 1,
        end: 2,
        status: STATUS.SPROUT,
        sprite: SpriteMapleSprout,
        alt: "A sparse burst of green is starting to top your little sprout."
      },
      {
        start: 2,
        end: 3,
        status: STATUS.SAPLING,
        sprite: SpriteMapleSapling,
        alt:
          "Supported by a thin, but sturdy trunk, a full head of green leaves rests."
      },
      {
        start: 3,
        status: STATUS.MATURE,
        sprite: SpriteMapleMature,
        alt:
          "A thick trunk shoulders a dense collection of bright green leaves so thick, light barely passes through."
      }
    ]
  });
};
