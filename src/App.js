import React, { Component } from "react";
import GameManager from "./game-manager/game-manager.container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameManager />
      </div>
    );
  }
}

export default App;
