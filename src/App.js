import React, { Component } from "react";
import "./App.css";
import Plant from "./plant/plant.component";
import SpriteMapleMature from "./plant/assets/maple-mature.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Plant
          type="TREE"
          name="Maple Tree"
          sprite={SpriteMapleMature}
          alt="Tree with thick branches full of green leaves held up by a strong trunk. Beneath the foliage, a light shadow is cast underneath."
        />
      </div>
    );
  }
}

export default App;
