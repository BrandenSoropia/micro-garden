import { TREE } from "../common/plant-types.constants";
import SeedSprite from "./assets/seed.png";
import MapleSproutSprite from "./assets/maple-sprout.png";
import MapleSaplingSprite from "./assets/maple-sapling.png";
import MapleMatureSprite from "./assets/maple-mature.png";
import { SPROUT, SAPLING, RIPE, SEED } from "./plant-state.constants";
import { uniqueId } from "lodash";

export const MAPLE_TREE: string = "Maple Tree";

export const THRESHOLDS: {
  SEED: number;
  SPROUT: number;
  SAPLING: number;
  RIPE: number;
} = {
  SEED: 0,
  SPROUT: 1,
  SAPLING: 3,
  RIPE: 5
};

interface IState {
  type: string;
  threshold: number;
  sprite: string;
}
const INITIAL_STATE_IDX = 0;
class StateManager {
  states: IState[];
  currentStateIdx: number = 0;
  constructor(states: IState[]) {
    this.states = states;
  }
  getStates(): IState[] {
    return this.states;
  }
  /**
   * Updates currentStateIdx to highest achieved state's index. Defaults to first state.
   */
  updateCurrentStateIdx(currentProgress: number) {
    let newStateIdx = INITIAL_STATE_IDX;
    const maxStateIdx = this.states.length - 1;

    if (currentProgress === this.states[INITIAL_STATE_IDX].threshold) {
      newStateIdx = INITIAL_STATE_IDX;
    } else if (currentProgress >= this.states[maxStateIdx].threshold) {
      newStateIdx = maxStateIdx;
    } else {
      // Find highest threshold achieved between lowest and highest state thresholds. Ignoring them since we already checked above.
      for (let i: number = 1; i < this.states.length - 1; i++) {
        if (currentProgress < this.states[i].threshold) {
          newStateIdx = i - 1; // The previous threshold is the highest achieved threshold
        }
      }
    }

    this.currentStateIdx = newStateIdx;
  }
  getCurrentSprite() {
    return this.states[this.currentStateIdx].sprite;
  }
}

interface IPlant {
  name: string;
  id: string;
  type: string;
  modifier: number;
  sprite: string; // Path to img
  stateManager: StateManager;
  progress: number; // Used to determine what state it currently is in
}

export class Plant implements IPlant {
  name: string;
  id: string; // Unique id
  type: string;
  modifier: number;
  stateManager: StateManager;
  sprite: string = SeedSprite; // Path to img. Default as seed
  progress: number = 0; // Used to determine what state it currently is in
  constructor({
    modifier,
    stateManager,
    type,
    name,
    progress
  }: Pick<IPlant, Exclude<keyof IPlant, "id" | "sprite">>) {
    this.id = uniqueId("plant-");
    this.modifier = modifier;
    this.stateManager = stateManager;
    this.type = type;
    this.name = name;
    this.progress = progress;
  }
  /**
   * Return path to correct sprite based on current progress and highest achieved state. Defaults to first state's sprite.
   */
  getSprite(): string {
    return this.stateManager.getCurrentSprite();
  }
  /**
   * Update instance's progress value and update current state.
   */
  updateProgress(value: number) {
    this.progress = value;
    this.stateManager.updateCurrentStateIdx(this.progress);
  }
}

export class Tree extends Plant {
  constructor({
    stateManager,
    name,
    progress
  }: Pick<IPlant, "stateManager" | "name" | "progress">) {
    super({ modifier: 1, type: TREE, stateManager, name, progress });
  }
}

const MAPLE_TREE_STATES: IState[] = [
  {
    type: SEED,
    threshold: THRESHOLDS.SEED,
    sprite: SeedSprite
  },
  {
    type: SPROUT,
    threshold: THRESHOLDS.SPROUT,
    sprite: MapleSproutSprite
  },
  {
    type: SAPLING,
    threshold: THRESHOLDS.SAPLING,
    sprite: MapleSaplingSprite
  },
  {
    type: RIPE,
    threshold: THRESHOLDS.RIPE,
    sprite: MapleMatureSprite
  }
];
export class Maple extends Tree {
  constructor({ progress = 0 }: { progress?: number } = {}) {
    super({
      stateManager: new StateManager(MAPLE_TREE_STATES),
      name: MAPLE_TREE,
      progress
    });
  }
}
