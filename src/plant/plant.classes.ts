import { TREE } from "../common/plant-types.constants";
import Seed from "./assets/seed.png";
import MapleSprout from "./assets/maple-sprout.png";
import MapleSapling from "./assets/maple-sapling.png";
import MapleMature from "./assets/maple-mature.png";
import { SPROUT, SAPLING, RIPE } from "./plant-state.constants";
import { uniqueId } from "lodash";

const MAPLE_TREE: string = "Maple Tree";

interface State {
  type: string;
  threshold: number;
  sprite: string;
}

export class Plant {
  id: string; // Unique id
  constructor() {
    this.id = uniqueId("plant-");
  }
  [x: string]: any;
}

export class Tree extends Plant {
  type: string = TREE;
  modifier: number = 1;
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
/**
 * Allow instantiation so unique instances are trackable
 */
export class Maple extends Tree {
  // Initialize as seed
  constructor() {
    super();
    this.setSprite();
  }
  sprite: string | null = null;
  progress: number = 0;
  setProgress(value: number) {
    this.progress = value;
  }
  getProgress() {
    return this.progress;
  }
  updateProgress(value: number) {
    this.setProgress(value);
    this.setSprite();
  }
  readonly name: string = MAPLE_TREE;
  readonly states: State[] = [
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
  getSprite(): string | null {
    return this.sprite;
  }
  setSprite(): void {
    let sprite: string = Seed;
    const {
      threshold: maxThreshold,
      sprite: maxSprite
    }: { threshold: number; sprite: string } = this.states[
      this.states.length - 1
    ];

    if (this.progress === 0) {
      this.sprite = sprite;
      return;
    } else if (this.progress >= maxThreshold) {
      this.sprite = maxSprite;
      return;
    }

    // Find highest threshold passed and return its sprite
    for (let i: number = 0; i < this.states.length; i++) {
      const { threshold }: { threshold: number } = this.states[i];
      if (this.progress < threshold) {
        sprite = this.states[i - 1].sprite;
        break;
      }
    }

    this.sprite = sprite;
  }
}
