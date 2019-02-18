/**
 * Source of truth for all plants available in game. All plant game data should come from this
 * file.
 */
import SPRITES from "./assets";

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
export const TREE = "TREE";
export const MAPLE_TREE = "MAPLE_TREE";

/**
 * Basic idea of plant registry. So far only goes as deep as Category -> Plant.
 * Game uses the plant level object as a template (ex: plantRegistry.TREE.MAPLE_TREE) to "instantiate"
 * a new plant.
 *
 * When instantiated:
 * So far, only a "progress" property is added to keep track of plant's development state in game.
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
          sprite: SPRITES[MAPLE_TREE][states.SEED]
        },
        {
          start: 1,
          end: 2,
          state: states.SPROUT,
          sprite: SPRITES[MAPLE_TREE][states.SPROUT]
        },
        {
          start: 2,
          end: 3,
          state: states.SAPLING,
          sprite: SPRITES[MAPLE_TREE][states.SAPLING]
        },
        {
          start: 3,
          state: states.MATURE,
          sprite: SPRITES[MAPLE_TREE][states.MATURE]
        }
      ]
    }
  }
};
