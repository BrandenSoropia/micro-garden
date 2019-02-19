import { PlantReducer as reducer, initialState } from "../plant.reducer";
import { SET_PLANTS } from "../plant.types";
import { setPlants } from "../plant.actions";
import {}

describe("PlantReducer tests", () => {
  it("should set plants on SET_PLANTS action", () => {
    const plants = [{
      type
    }]
    expect(reducer(initialState, setPlants()));
  });
});
