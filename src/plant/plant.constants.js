/**
 * Source of truth for all plants available in game. All plant game data should come from this
 * file.
 */
import { inRange, get } from "lodash";
// Sprites
import SpriteSeed from "./assets/seed.png";
import SpriteMapleSprout from "./assets/maple-sprout.png";
import SpriteMapleSapling from "./assets/maple-sapling.png";
import SpriteMapleMature from "./assets/maple-mature.png";

/**
 * Needed to map plant sprites per each development state.
 */
export const states = {
  SEED: "SEED",
  SPROUT: "SPROUT",
  SAPLING: "SAPLING",
  MATURE: "MATURE"
};

/**
 * These constants are needed to navigate the registry and maps sprites to game data.
 */
export const TREE = "TREE"; // Category
export const MAPLE_TREE = "MAPLE_TREE"; // Plant

export const ABSOLUTE_SEED_STATE_PROGRESS = 0;

// In case thresholds array are not in particular order...
export const getSeedState = thresholds =>
  thresholds.find(({ state }) => state === states.SEED);

export class Plant {
  constructor({ name, thresholds, category }) {
    this.name = name;
    this.thresholds = thresholds;
    this.category = category;

    // Everything starts at 0
    this.progress = 0;
    this.currentState = getSeedState(thresholds);
  }

  getThresholds() {
    return this.thresholds;
  }

  setProgress(value) {
    this.progress = value;
  }

  getProgress() {
    return this.progress;
  }

  updateProgress(newProgress) {
    this.setProgress(newProgress);
    this.setCurrentState(this.findCurrentState());
  }

  findCurrentState() {
    const progress = this.getProgress();
    const thresholds = this.getThresholds();
    const matureThreshold = thresholds[thresholds.length - 1];

    if (progress === ABSOLUTE_SEED_STATE_PROGRESS) {
      return getSeedState(thresholds);
    } else if (progress >= matureThreshold.start) {
      return matureThreshold;
    }

    // Find the highest threshold passed. Don't need to worry about any mature state thresholds' `end` property not being defined due to
    // max threshold check above
    return thresholds.find(({ start, end }) => inRange(progress, start, end));
  }

  setCurrentState(newState) {
    this.currentState = newState;
  }

  getCurrentState() {
    return this.currentState;
  }

  getCurrentSprite() {
    return this.getCurrentState().sprite;
  }
}

/**
 * Properties:
 * name: Text to be displayed
 *   thresholds: array of object describing each of plant's development state. Ranges use start (inclusive) and end (exclusive). Ideally in order of increasing maturity. State should look like below
 *     start: number
 *     end: number
 *     state: string,
 *     sprite: path to image. Imported from asset's index file
 *
 * Include helper methods to get/set and update plant.
 */
export class MapleTree extends Plant {
  constructor() {
    const name = "Maple Tree";

    // Ideally in order of increasing maturity for sanity's sake
    const thresholds = [
      {
        start: ABSOLUTE_SEED_STATE_PROGRESS,
        end: 1,
        state: states.SEED,
        sprite: SpriteSeed
      },
      {
        start: 1,
        end: 2,
        state: states.SPROUT,
        sprite: SpriteMapleSprout
      },
      {
        start: 2,
        end: 3,
        state: states.SAPLING,
        sprite: SpriteMapleSapling
      },
      {
        start: 3,
        state: states.MATURE,
        sprite: SpriteMapleMature
      }
    ];

    super({ name, thresholds, category: TREE });
  }
}
