/**
 * Maps sprites for each plant state to plants defined in plants.constants.
 * Adding new plants/modifiying any constants would need to be reflected here.
 */
import { MAPLE_TREE, states } from "../plant.constants";
import MapleMature from "./maple-mature.png";
import MapleSapling from "./maple-sapling.png";
import MapleSprout from "./maple-sprout.png";
import Seed from "./seed.png";

const SPRITES = {
  [MAPLE_TREE]: {
    [states.SEED]: Seed,
    [states.SPROUT]: MapleSprout,
    [states.SAPLING]: MapleSapling,
    [states.MATURE]: MapleMature
  }
};

export default SPRITES;
