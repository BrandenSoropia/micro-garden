import { Maple, MAPLE_THRESHOLDS } from "../plant.classes";
import Seed from "../assets/seed.png";
import MapleSprout from "../assets/maple-sprout.png";
import MapleSapling from "../assets/maple-sapling.png";
import MapleMature from "../assets/maple-mature.png";

describe("Tree classes tests", () => {
  describe("Maple tests", () => {
    const MapleTree: Maple = new Maple();
    describe("setSprite tests", () => {
      it("should return SEED sprite if no progress", () => {
        MapleTree.setProgress(0);
        MapleTree.setSprite();
        expect(MapleTree.getSprite()).toEqual(Seed);
      });
      it("should return SPROUT sprite if exactly on threshold", () => {
        MapleTree.setProgress(MAPLE_THRESHOLDS.SPROUT);
        MapleTree.setSprite();
        expect(MapleTree.getSprite()).toEqual(MapleSprout);
      });
      it("should return SPROUT sprite if above its on threshold but below SAPLING threshold", () => {
        MapleTree.setProgress(MAPLE_THRESHOLDS.SPROUT + 1);
        MapleTree.setSprite();
        expect(MapleTree.getSprite()).toEqual(MapleSprout);
      });
      it("should return SAPLING sprite if exactly on threshold", () => {
        MapleTree.setProgress(MAPLE_THRESHOLDS.SAPLING);
        MapleTree.setSprite();
        expect(MapleTree.getSprite()).toEqual(MapleSapling);
      });
      it("should return SAPLING sprite if above its on threshold but below RIPE threshold", () => {
        MapleTree.setProgress(MAPLE_THRESHOLDS.SAPLING + 1);
        MapleTree.setSprite();
        expect(MapleTree.getSprite()).toEqual(MapleSapling);
      });
      it("should return RIPE sprite if exactly on threshold", () => {
        MapleTree.setProgress(MAPLE_THRESHOLDS.RIPE);
        MapleTree.setSprite();
        expect(MapleTree.getSprite()).toEqual(MapleMature);
      });
      it("should return RIPE sprite if above its on threshold", () => {
        MapleTree.setProgress(MAPLE_THRESHOLDS.RIPE + 1);
        MapleTree.setSprite();
        expect(MapleTree.getSprite()).toEqual(MapleMature);
      });
    });
  });
});
