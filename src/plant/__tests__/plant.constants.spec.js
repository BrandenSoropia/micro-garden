import {
  Plant,
  ABSOLUTE_SEED_STATE_PROGRESS,
  states,
  getSeedState
} from "../plant.constants";

const thresholds = [
  {
    start: ABSOLUTE_SEED_STATE_PROGRESS,
    end: 1,
    state: states.SEED,
    sprite: "SpriteSeed"
  },
  {
    start: 1,
    end: 2,
    state: states.SPROUT,
    sprite: "SpriteMapleSprout"
  },
  {
    start: 2,
    state: states.MATURE,
    sprite: "SpriteMapleMature"
  }
];
const mockPlant = new Plant({
  name: "Mock Tree",
  thresholds,
  category: "mock Category"
});

describe("Plant constants tests", () => {
  beforeEach(() => {
    mockPlant.setProgress(0);
  });
  describe("Plant class tests", () => {
    describe("getSeedState helper tests", () => {
      it("should return SEED state", () => {
        expect(getSeedState(thresholds)).toEqual({
          start: ABSOLUTE_SEED_STATE_PROGRESS,
          end: 1,
          state: states.SEED,
          sprite: "SpriteSeed"
        });
      });
    });

    describe("findCurrentState tests", () => {
      it("should return first state (most juvenile state) if at ABSOLUTE_SEED_STATE_PROGRESS", () => {
        expect(mockPlant.findCurrentState()).toEqual({
          start: 0,
          end: 1,
          state: states.SEED,
          sprite: "SpriteSeed"
        });
      });

      it("should return state between SEED and MATURE", () => {
        mockPlant.setProgress(1);
        expect(mockPlant.findCurrentState()).toEqual({
          start: 1,
          end: 2,
          state: states.SPROUT,
          sprite: "SpriteMapleSprout"
        });
      });

      it("should return MATURE state if exactly on threshold start", () => {
        mockPlant.setProgress(2);
        expect(mockPlant.findCurrentState()).toEqual({
          start: 2,
          state: states.MATURE,
          sprite: "SpriteMapleMature"
        });
      });

      it("should return MATURE state if above MATURE threshold", () => {
        mockPlant.setProgress(5);
        expect(mockPlant.findCurrentState()).toEqual({
          start: 2,
          state: states.MATURE,
          sprite: "SpriteMapleMature"
        });
      });
    });

    describe("updateProgress tests", () => {
      it("should update progress and current state", () => {
        mockPlant.updateProgress(2);

        expect(mockPlant.getProgress()).toBe(2);
        expect(mockPlant.getCurrentState()).toEqual({
          start: 2,
          state: states.MATURE,
          sprite: "SpriteMapleMature"
        });
      });
    });
  });
});
