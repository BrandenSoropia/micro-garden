/**
 * Source of truth for all plants available in game. All plant game data should come from this
 * file.
 */
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

/**
 * Basic idea of plant registry. So far only goes as deep as Category -> Plant.
 * Game uses the plant level object as a template (ex: plantRegistry.TREE.MAPLE_TREE) to "instantiate"
 * a new plant.
 *
 * When instantiated:
 * So far, only a "progress" property is added to keep track of plant's development state in game.
 *
 * Plant template should look like:
 *
 * key: Reference when searching in category. Treated like `id`
 *   name: Text to be displayed
 *   thresholds: array of object describing each of plant's development state. Ranges use start (inclusive) and end (exclusive). State should look like below
 *     start: number
 *     end: number
 *     state: string,
 *     sprite: path to image. Imported from asset's index file
 */
export const plantRegistry = {
  [TREE]: {
    [MAPLE_TREE]: {
      name: "Maple Tree",
      thresholds: [
        {
          start: 0,
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
      ]
    }
  }
};
