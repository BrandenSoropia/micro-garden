/**
 * Source of truth for all plants available in game. All plant game data should come from this
 * file.
 */
// Sprites
import { uniqueId, inRange } from 'lodash';
import SpriteSeed from './assets/seed.png';
import SpriteMapleSprout from './assets/maple-sprout.png';
import SpriteMapleSapling from './assets/maple-sapling.png';
import SpriteMapleMature from './assets/maple-mature.png';
import { STATUS, TREE, MAPLE_TREE, ABSOLUTE_SEED_STATE_PROGRESS } from './plant.constants';

// In case thresholds array are not in particular order...
export const getSeedState = thresholds => thresholds.find(({ status }) => status === STATUS.SEED);

export const getCurrentPlantState = ({ progress, thresholds }) => {
  const matureThreshold = thresholds[thresholds.length - 1];

  if (progress === ABSOLUTE_SEED_STATE_PROGRESS) {
    return getSeedState(thresholds);
  }
  if (progress >= matureThreshold.start) {
    return matureThreshold;
  }

  // Find the highest threshold passed. Don't need to worry about any mature state thresholds' `end` property not being defined due to
  // max threshold check above
  return thresholds.find(({ start, end }) => inRange(progress, start, end));
};

export const makePlant = plantProperties => {
  const { id = uniqueId('plant-'), name, thresholds, type, progress = 0 } = plantProperties;
  return {
    id, // Used to help find specific plants instances
    name,
    thresholds,
    type,
    progress,
    currentState:
      progress === ABSOLUTE_SEED_STATE_PROGRESS
        ? getSeedState(thresholds)
        : getCurrentPlantState({ progress, thresholds })
  };
};

export const mapleSeedState = {
  start: ABSOLUTE_SEED_STATE_PROGRESS,
  end: 1,
  status: STATUS.SEED,
  sprite: SpriteSeed,
  alt: 'A brown, oval shaped seed.'
};

export const mapleSproutState = {
  start: 1,
  end: 2,
  status: STATUS.SPROUT,
  sprite: SpriteMapleSprout,
  alt: 'A sparse burst of green is starting to top your little sprout.'
};

export const mapleSaplingState = {
  start: 2,
  end: 3,
  status: STATUS.SAPLING,
  sprite: SpriteMapleSapling,
  alt: 'Supported by a thin, but sturdy trunk, a full head of green leaves rests.'
};

export const mapleMatureState = {
  start: 3,
  status: STATUS.MATURE,
  sprite: SpriteMapleMature,
  alt:
    'A thick trunk shoulders a dense collection of bright green leaves so thick, light barely passes through.'
};

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
export const makeMapleTree = ({ id, progress } = {}) => {
  return makePlant({
    id,
    progress,
    type: TREE,
    name: MAPLE_TREE,
    // Ideally in order of increasing maturity for sanity's sake
    thresholds: [mapleSeedState, mapleSproutState, mapleSaplingState, mapleMatureState]
  });
};
