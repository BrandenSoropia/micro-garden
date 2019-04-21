/**
 * Display sprite given from url or path, with default or given dimensions.
 */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledSprite = styled.img`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;

const Sprite = ({ url, height, width, alt, ...rest }) => {
  return (
    <>
      <StyledSprite {...rest} src={url} height={height} width={width} alt={alt} />
    </>
  );
};

Sprite.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string.isRequired
};

Sprite.defaultProps = {
  height: '',
  width: ''
};

export default Sprite;
