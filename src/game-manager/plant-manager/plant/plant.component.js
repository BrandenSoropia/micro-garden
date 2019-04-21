/**
 * Handles displaying plant information and interactions.
 */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Sprite from 'common/components/sprite/sprite.component';
import ProgressBar from './progress-bar/progress-bar.component';

const CenteredContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PaddedSprite = styled(Sprite)`
  padding-bottom: 8px;
`;

const Plant = ({ sprite, progress, end: thresholdEnd, alt, onClick, ...rest }) => {
  return (
    <CenteredContainer {...rest} onClick={onClick}>
      <PaddedSprite url={sprite} alt={alt} progressPercentage />
      {thresholdEnd && <ProgressBar currentValue={progress} maxValue={thresholdEnd} />}
    </CenteredContainer>
  );
};

Plant.propTypes = {
  sprite: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  end: PropTypes.number, // Once plant is at max maturity, end does not exist
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Plant.defaultProps = {
  end: null
};

export default Plant;
