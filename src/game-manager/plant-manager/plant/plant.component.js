/**
 * Handles displaying plant information and interactions.
 */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import ProgressBar from './progress-bar/progress-bar.component';
import Sprite from './sprite/sprite.component';

const CenteredContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PaddedSprite = styled(Sprite)`
  padding-bottom: 8px;
`;

const Plant = ({ sprite, progress, end: thresholdEnd, alt, onClick }) => {
  return (
    <CenteredContainer onClick={onClick}>
      <PaddedSprite url={sprite} alt={alt} progressPercentage />
      <ProgressBar currentValue={progress} maxValue={thresholdEnd} />
    </CenteredContainer>
  );
};

Plant.propTypes = {
  sprite: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Plant;
