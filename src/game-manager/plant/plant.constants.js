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

/**
 * Needed to map plant sprites per each development state.
 */
export const STATUS = {
  SEED: "Seed",
  SPROUT: "Sprout",
  SAPLING: "Sapling",
  MATURE: "Mature"
};

/**
 * Plant types and names.
 */
export const TREE = "TREE";
export const MAPLE_TREE = "Maple Tree";

export const ABSOLUTE_SEED_STATE_PROGRESS = 0;

// In case thresholds array are not in particular order...
export const getSeedState = thresholds =>
  thresholds.find(({ status }) => status === STATUS.SEED);

export class Plant {
  constructor({ name, thresholds, type }) {
    this.name = name;
    this.thresholds = thresholds;
    this.type = type;

    // Everything starts at 0
    this.progress = 0;
    this.currentState = getSeedState(thresholds);
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
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

  getCurrentStatus() {
    return this.getCurrentState().status;
  }

  getCurrentSprite() {
    return this.getCurrentState().sprite;
  }

  getCurrentSpriteAlt() {
    return this.getCurrentState().alt;
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
    const name = MAPLE_TREE;

    // Ideally in order of increasing maturity for sanity's sake
    const thresholds = [
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
    ];

    super({ name, thresholds, type: TREE });
  }
}
