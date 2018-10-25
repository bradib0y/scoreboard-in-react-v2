import React from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends React.Component {
  state = {
    players: [
      {
        name: "John Johnson",
        score: 0,
        id: 1
      },
      {
        name: "Jack Jackson",
        score: 0,
        id: 2
      },
      {
        name: "Joanne Johannson",
        score: 0,
        id: 3
      },
      {
        name: "Steve Stevenson",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState(
      prevState => (
        {
          players: [...prevState.players, {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }]
        }
      )
    );
  };

  handleScoreChange = (id, delta) => {
    this.setState(prevState => ({
      score: prevState.players.find(p => p.id == id).score += delta
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map(player =>
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
