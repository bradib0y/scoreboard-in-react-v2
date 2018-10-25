import React from 'react';
import Stats from './Stats';
import StopWatch from './StopWatch';

import PropTypes from 'prop-types';

const Header = ({title, players}) => {


    return (
        <header>
            <Stats players={players} />
            <h1>{title}</h1>
            <StopWatch />
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    player: PropTypes.arrayOf(PropTypes.object)
  };

export default Header;