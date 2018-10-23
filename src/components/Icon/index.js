import React from 'react';
import PropTypes from 'prop-types';

import ICONS from './iconList';
 const Icon = ({icon, size, color}) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
  };
   return (
    <svg
      style={styles.svg}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 1024 1024"
    >
      <path
        style={styles.path}
        d={ICONS[icon]}
      />
    </svg>
  );
};
 Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};
 Icon.defaultProps = {
  size: 16,
  color: '#000000',

};
 export default Icon;