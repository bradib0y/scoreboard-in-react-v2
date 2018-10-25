import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends React.PureComponent {
  
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number,    
    id: PropTypes.number
  };


  render = () => {
    const {name, removePlayer, changeScore, score, id} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          {name}
        </span>

        <Counter score={score} changeScore={changeScore} id={id} />
      </div>
    );
  }  
}

Player.PropTypes = {};

export default Player;