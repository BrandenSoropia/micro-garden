import React from 'react';
import PropTypes from 'prop-types';
import Sprite from 'common/components/sprite/sprite.component';
import SpriteSoil from 'common/assets/soil.png';
import styled from 'styled-components';

const Container = styled.div`
  padding: 32px;
  width: 100px;

  &:hover {
    cursor: pointer;
  }
`;

/**
 * Optionally contain plant. Handles planting and adding to currently planted plants.
 */
const Plot = ({ children, onEvent, ...rest }) => {
  return (
    <Container
      {...rest}
      tabIndex="0"
      role="button"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        onEvent();
      }}
      onKeyDown={e => {
        e.preventDefault();
        e.stopPropagation();
        onEvent();
      }}
    >
      {children || <Sprite url={SpriteSoil} alt="A plot of rich, brown soil ready for plating." />}
    </Container>
  );
};

Plot.propTypes = {
  children: PropTypes.node,
  onEvent: PropTypes.func.isRequired
};

Plot.defaultProps = {
  children: null
};

export default Plot;
