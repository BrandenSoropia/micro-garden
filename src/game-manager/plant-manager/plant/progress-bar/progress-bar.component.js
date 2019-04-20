/**
 * Display a bar displaying percentage of between current and max values.
 */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  height: 5px;
  position: relative;
  width: 75%;

  &::after {
    background-color: red;
    content: '';
    display: inline-block;
    height: inherit;
    position: absolute;
    width: ${({ progressPercentage }) => progressPercentage}%;
  }
`;

const ProgressBar = ({ currentValue, maxValue, isFinalState, ...rest }) => {
  const progressPercentage = Math.floor((currentValue / maxValue) * 100);
  return (
    <Container
      {...rest}
      progressPercentage={isFinalState ? 100 : progressPercentage}
      aria-label={`Current growth stage progress: ${
        isFinalState ? 'maxed' : `${progressPercentage}%`
      }`}
    />
  );
};

ProgressBar.propTypes = {
  currentValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  isFinalState: PropTypes.bool
};

ProgressBar.defaultProps = {
  isFinalState: false
};

export default ProgressBar;
