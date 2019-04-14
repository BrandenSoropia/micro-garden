import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: white;
  border: 2px solid black;
  height: 25px;
  width: 100px;

  &::after {
    content: '';
    display: inline-block;
    background-color: red;
    height: inherit;
    width: ${({ progressWidth }) => progressWidth}%;
  }
`;

const ProgressBar = ({ currentValue, maxValue }) => {
  const progressWidth = Math.floor((currentValue / maxValue) * 100);
  return <Container progressWidth={progressWidth} />;
};

ProgressBar.propTypes = {
  currentValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired
};

export default ProgressBar;
