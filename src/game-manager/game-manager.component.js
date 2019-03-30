import React, { useEffect } from "react";
import Plant from "./plant/plant.component";
import { uniqueId } from "lodash";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { initializeGame } from "./game-manager.actions";
import { selectPlants } from "./game-manager.selectors";
import { plantPropTypes } from "./plant/plant.prop-types";
import PropTypes from "prop-types";

export const GameManager = ({ plants, initializeGame }) => {
  const useInitializeGame = useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div>
      {plants &&
        plants.map(plant => (
          <Plant
            key={uniqueId("plant-")}
            name={plant.getName()}
            status={plant.getCurrentStatus()}
            sprite={plant.getCurrentSprite()}
            alt={plant.getCurrentSpriteAlt()}
          />
        ))}
    </div>
  );
};

GameManager.propTypes = {
  plants: PropTypes.arrayOf(plantPropTypes)
};

GameManager.defaultProps = {
  plants: null
};

export default connect(
  createStructuredSelector({
    plants: selectPlants
  }),
  {
    initializeGame
  }
)(GameManager);
