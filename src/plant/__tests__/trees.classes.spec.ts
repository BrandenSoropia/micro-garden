import { Maple as MapleTree, MAPLE_THRESHOLDS } from "../trees.classes";
import Seed from "../assets/seed.png";
import MapleSprout from "../assets/maple-sprout.png";
import MapleSapling from "../assets/maple-sapling.png";
import MapleMature from "../assets/maple-mature.png";

describe("Tree classes tests", () => {
  describe("Maple tests", () => {
    it("should return SEED sprite if no progress", () => {
      expect(MapleTree.getSprite(0)).toEqual(Seed);
    });
    it("should return SPROUT sprite if exactly on threshold", () => {
      expect(MapleTree.getSprite(MAPLE_THRESHOLDS.SPROUT)).toEqual(MapleSprout);
    });
    it("should return SPROUT sprite if above its on threshold but below SAPLING threshold", () => {
      expect(MapleTree.getSprite(MAPLE_THRESHOLDS.SPROUT + 1)).toEqual(
        MapleSprout
      );
    });
    it("should return SAPLING sprite if exactly on threshold", () => {
      expect(MapleTree.getSprite(MAPLE_THRESHOLDS.SAPLING)).toEqual(
        MapleSapling
      );
    });
    it("should return SAPLING sprite if above its on threshold but below RIPE threshold", () => {
      expect(MapleTree.getSprite(MAPLE_THRESHOLDS.SAPLING + 1)).toEqual(
        MapleSapling
      );
    });
    it("should return RIPE sprite if exactly on threshold", () => {
      expect(MapleTree.getSprite(MAPLE_THRESHOLDS.RIPE)).toEqual(MapleMature);
    });
    it("should return RIPE sprite if above its on threshold", () => {
      expect(MapleTree.getSprite(MAPLE_THRESHOLDS.RIPE + 1)).toEqual(
        MapleMature
      );
    });
  });
});
