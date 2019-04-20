/**
 * Contains entire game. Handles data initialization, game management and what to display.
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initializeGame as _initializeGame } from './game-manager.actions';
import PlantManager from './plant-manager/plant-manager.container';

export const GameManager = ({ initializeGame }) => {
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
  initializeGame: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    initializeGame: _initializeGame
  }
)(GameManager);
