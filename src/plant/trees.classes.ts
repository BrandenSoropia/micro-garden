import { TREE } from "../common/plant-types.constants";
import Seed from "./assets/seed.png";
import MapleSprout from "./assets/maple-sprout.png";
import MapleSapling from "./assets/maple-sapling.png";
import MapleMature from "./assets/maple-mature.png";
import { SPROUT, SAPLING, RIPE } from "./plant-state.constants";

const MAPLE_TREE: string = "Maple Tree";

interface State {
  type: string;
  threshold: number;
  sprite: string;
}

export class Tree {
  static type: string = TREE;
}

export const MAPLE_THRESHOLDS: {
  SPROUT: number;
  SAPLING: number;
  RIPE: number;
} = {
  SPROUT: 1,
  SAPLING: 3,
  RIPE: 5
};
export class Maple extends Tree {
  static _name: string = MAPLE_TREE;
  static states: State[] = [
    // Do not include SEED state, should be the same and assumed across all plants
    {
      type: SPROUT,
      threshold: MAPLE_THRESHOLDS.SPROUT,
      sprite: MapleSprout
    },
    {
      type: SAPLING,
      threshold: MAPLE_THRESHOLDS.SAPLING,
      sprite: MapleSapling
    },
    {
      type: RIPE,
      threshold: MAPLE_THRESHOLDS.RIPE,
      sprite: MapleMature
    }
  ];
  static getSprite(progress: number) {
    let sprite: string = Seed;
    const {
      threshold: maxThreshold,
      sprite: maxSprite
    }: { threshold: number; sprite: string } = Maple.states[
      Maple.states.length - 1
    ];

    if (progress === 0) {
      return sprite;
    } else if (progress >= maxThreshold) {
      return maxSprite;
    }

    // Find highest threshold passed and return its sprite
    for (let i: number = 0; i < Maple.states.length; i++) {
      const { threshold }: { threshold: number } = Maple.states[i];

      if (progress < threshold) {
        sprite = Maple.states[i - 1].sprite;
        break;
      }
    }

    return sprite;
  }
}
