/**
 * Contains entire game. Handles data initialization, game management and what to display.
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initializeGame } from "./game-manager.actions";
import { plantPropTypes } from "./plant/plant.prop-types";
import PropTypes from "prop-types";
import PlantManager from "./plant-manager/plant-manager.component";

export const GameManager = ({ plants, initializeGame }) => {
  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div>
      <PlantManager />
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
  null,
  {
    initializeGame
  }
)(GameManager);
